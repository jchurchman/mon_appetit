'use strict';

const pg = require('pg');
const express = require('express');
const bodyParser = require('body-parser');
const requestProxy = require('express-request-proxy');
const PORT = process.env.PORT || 3000;
const app = express();
const conString = 'postgres://localhost:5432/kilovolt';
const client = new pg.Client(conString);
client.connect();
client.on('error', err => console.error(err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./public'));

function proxyBigOven(request, response) {
  console.log('Routing BigOven request for', request.params[0]);
  (requestProxy({
    url: `https://api2.bigoven.com/recipes?any_kw=chicken&rpp=5&api_key=1x9xx03CdK3xioV1W8sJXRT3RWw01YAN` //API request url here
    // headers: {Authorization: `token ${process.env.BIGOVEN_TOKEN}`}
  }))(request, response);
}


app.get('/login', (request, response) => {
  console.log('request:', request.query.userName);
  // let sql = `SELECT * FROM login WHERE $userName === user_name && $password === password`

  // client.query(sql, [request.query.val])
  //   .then(result => response.send(result.rows))
  //   .catch(console.error);
})



app.get('*', (request, response) => response.sendFile('index.html', {root: './public'}));
app.listen(PORT, () => console.log(`server started on port ${PORT}!`));


