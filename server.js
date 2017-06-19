'use strict';

const pg = require('pg');
const express = require('express');
const bodyParser = require('body-parser');
const requestProxy = require('express-request-proxy');
const PORT = process.env.PORT || 3000;
const app = express();
const conString = localhost:5000;
const client = new pg.Client(conString);
client.connect();
client.on('error', err => console.error(err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./public'));

function proxyBigOven(request, response) {
  console.log('Routing BigOven request for', request.params[0]);
  (requestProxy({
    url: `` //API request url here
    headers: {Authorization: `token ${process.env.BIGOVEN_TOKEN}`}
  }))(request, response);
}

app.get('*', (request, response) => response.sendFile('index.html', {root: './public'}));
