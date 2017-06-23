'use strict';

const pg = require('pg');
const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const superagent = require('superagent');
require('handlebars');
const PORT = process.env.PORT || 3000;
const app = express();


const conString = process.env.DATABASE_URL;
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

app.get('bigoven/categories', (request, response) => {
  superagent
    .get(`https://api2.bigoven.com/recipe/categories?api_key=${process.env.API_KEY}`)
    .end((err, superagentResponse) => {
      response.send(superagentResponse.body);
    });
});

app.get('/checkUserName', (request, response) => {
  let sql = `SELECT * FROM users WHERE username = ${request.query.username}`

  client.query(sql, request.query.username)
    .then( result => response.send(result.rows[0]))
    .catch(console.error);
})

app.get('/login', (request, response) => {
  let sql = `SELECT * FROM users WHERE username = $1 AND password = $2`

  client.query(sql, request.query.userCheck)
    .then(result => response.send(result.rows[0]))
    .catch(console.error);
})

app.get('/myRecipes', (request, response) => {
  var numUserId = Number(request.query.userId);

  let sql = 'SELECT recipes.recipe_id, recipes.title, recipes.photo_url FROM recipes INNER JOIN normalize ON recipes.recipe_id = normalize.recipe_id WHERE user_id = $1;'

  client.query(sql, [numUserId])
    .then(result => response.send(result.rows))
    .catch(console.error);
})

app.post('/addUser', (request, response) => {  //TODO: adduser
  console.log('request:', request.query.userName);

  let sql = 'INSERT INTO users (username, password, name) VALUES($1, $2, $3)'

  client.query(sql, [request.body.username, request.body.password, request.body.name], function(err){
    if(err) {
      console.log('error: ', err);
    } else {
      response.send('ok');
    }
  })
})

app.post('/myRecipes', (request, response) => { //TODO: check for recipe already in recipe table
  var numRecipeId = Number(request.body.recipeId);
  var numUserId = Number(request.body.userId);
  let sql = 'INSERT INTO recipes(recipe_id, title, photo_url) VALUES($1, $2, $3)'

  client.query(sql, [numRecipeId, request.body.recipeTitle, request.body.PhotoUrl], function(err){
    if (err) {
      console.log('error:', err);
    } else {
      let normalSql = 'INSERT INTO normalize(recipe_id, user_id) VALUES($1, $2)'

      client.query(normalSql, [numRecipeId, numUserId],
        function (err) {
          if (err) {
            console.log('error:', err);
          } else {
            response.send('ok');
          }
        })
    }
  })
})


app.get('*', (request, response) => response.sendFile('index.html', {root: './public'}));
app.listen(PORT, () => console.log(`server started on port ${PORT}!`));
