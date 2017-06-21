'use strict';

const pg = require('pg');
const express = require('express');
const bodyParser = require('body-parser');
// const requestProxy = require('express-request-proxy');
const superagent = require('superagent');
const PORT = process.env.PORT || 3000;
const app = express();


const conString = 'postgres://localhost:5432/MonAppetit';
const client = new pg.Client(conString);
client.connect();
client.on('error', err => console.error(err));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('./public'));

app.get('/searchRecipes/:text/:category', (request, response) => {
  superagent
    .get(`https://api2.bigoven.com/recipes?any_kw=${request.params.text}&include_primarycat=${request.params.category}&rpp=20&api_key=1x9xx03CdK3xioV1W8sJXRT3RWw01YAN`)
    .end((err, superagentResponse) => {
      console.log(superagentResponse.body);
      response.send(superagentResponse.body);
    });
});

app.get('/login', (request, response) => {
  // console.log('request:', request.query.userName);
  let sql = `SELECT * FROM users WHERE username = $1 AND password = $2`

  client.query(sql, request.query.userCheck)
    .then(result => response.send(result.rows))
    .catch(console.error);
})

app.put('addUser', (request, response) => {
console.log('request:', request.query.userName);
  // let sql = 
})

app.get('*', (request, response) => response.sendFile('index.html', {root: './public'}));
app.listen(PORT, () => console.log(`server started on port ${PORT}!`));
