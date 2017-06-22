'use strict';

const pg = require('pg');
const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config()
// const requestProxy = require('express-request-proxy');
const superagent = require('superagent');
require('handlebars');
const PORT = process.env.PORT || 3000;
const app = express();


const conString = process.env.PG_CONSTRING;
const client = new pg.Client(conString);
client.connect();
client.on('error', err => console.error(err));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('./public'));

app.get('/bigoven/:text/:category', (request, response) => {
  superagent
    .get(`https://api2.bigoven.com/recipes?any_kw=${request.params.text}&include_primarycat=${request.params.category}&rpp=20&api_key=${process.env.API_KEY}`)
    .end((err, superagentResponse) => {
      response.send(superagentResponse.body);
    });
});

app.get('/bigoven/:recipeId', (request,response) => {
  superagent
    .get(`https://api2.bigoven.com/recipe/${request.params.recipeId}?api_key=${process.env.API_KEY}`)
    .end((err,superagentResponse) => {
      response.send(superagentResponse.body);
    });
});

app.get('/login', (request, response) => {
  let sql = `SELECT * FROM users WHERE username = $1 AND password = $2`

  client.query(sql, request.query.userCheck)
    .then(result => response.send(result.rows[0]))
    .catch(console.error);
})

app.get('/myRecipes', (request, response) => {
  var numUserId = Number(request.query.userId);
  console.log('this is the request body', numUserId);
  let sql = 'SELECT * FROM recipes WHERE user_id=$1;'

  client.query(sql, [numUserId])
    .then(result => response.send(result.rows))
    .catch(console.error);
})

app.post('/addUser', (request, response) => {
  console.log('request:', request.query.userName);
  // let sql =
})

app.post('/myRecipes', (request, response) => {
  // i'm adding a recipe to the recipe table
  var numRecipeId = Number(request.body.recipeId);
  var numUserId = Number(request.body.userId);
  console.log('this is the request body', numRecipeId, numUserId, request.body.recipeImgUrl, request.body.recipeTitle);
  let sql = 'INSERT INTO recipes(recipe_id, user_id, img, title) VALUES($1, $2, $3, $4)'

  client.query(sql, [numRecipeId, numUserId, request.body.recipeImgUrl, request.body.recipeTitle], function(err){
    if (err) console.log('error:', err);
  })
})

app.get('*', (request, response) => response.sendFile('index.html', {root: './public'}));
app.listen(PORT, () => console.log(`server started on port ${PORT}!`));
