'use strict';

var recipes = [];
const pg = require('pg');
const express = require('express');
const bodyParser = require('body-parser');
// const requestProxy = require('express-request-proxy');
const superagent = require('superagent');
const PORT = process.env.PORT || 3000;
const app = express();
const conString = 'postgres://localhost:5432/kilovolt';
const client = new pg.Client(conString);
client.connect();
client.on('error', err => console.error(err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('./public'));

// function proxyBigOven(request, response) {
//   console.log('Routing BigOven request for', request.params);
//    console.log(`https://api2.bigoven.com/recipes?any_kw=${request.params.text}&include_primarycat=${request.params.category}&rpp=20&api_key=1x9xx03CdK3xioV1W8sJXRT3RWw01YAN`);
//   (requestProxy({
//     url: `https://api2.bigoven.com/recipes?any_kw=${request.params.text}&include_primarycat=${request.params.category}&rpp=20&api_key=1x9xx03CdK3xioV1W8sJXRT3RWw01YAN`,
//     dataType: 'json'

//     // bigoven: 'https://api2.bigoven.com/recipes?any_kw=chicken&include_cat=4&rpp=20&api_key=1x9xx03CdK3xioV1W8sJXRT3RWw01YAN'
//     //          'https://api2.bigoven.com/recipes?any_kw=chicken&include_cat=1&rpp=20&api_key=1x9xx03CdK3xioV1W8sJXRT3RWw01YAN'
//     //          'https://www.bigoven.com/recipes/search?any_kw=chicken&include_primarycat=appetizers&favoriteofme=False&sort=quality&view=default&db=445'

//     // headers: {Authorization: `token ${process.env.BIGOVEN_TOKEN}`}
//   }))(request, response);
//   console.log(response.body);
// }

app.get('/searchRecipes/:text/:category', (request, response) => {
  superagent
    .get(`https://api2.bigoven.com/recipes?any_kw=${request.params.text}&include_primarycat=${request.params.category}&rpp=20&api_key=1x9xx03CdK3xioV1W8sJXRT3RWw01YAN`)
    .end((err, superagentResponse) => {

      console.log(superagentResponse.body.Results);
      response.send(superagentResponse.body);
    });

  // $('#title').text(recipes[0].Title);
  // $('#category').text(recipes[0].Category);
  // $('#servings').text(recipes[0].Servings);
  // $('#photo-url').html(`<img src=${recipes[0].PhotoUrl}>`);
});


app.get('*', (request, response) => response.sendFile('index.html', { root: './public' }));
app.listen(PORT, () => console.log(`server started on port ${PORT}!`));

// Add searchRequest function, called from test_search.html button



// function submitSearch(text, selected) {
//   var apiRequest = `${process.env.PRE_URL} any_kw=${text} & include_cat= ${selected} & rpp= ${process.env.RPP} & api_key= ${process.env.API_KEY}`;
//   console.log(apiRequest);

//   // TODO: move to separate function
//   $.get(apiRequest, function (data) {
//     console.log('api response: ', data);
//     recipes = data.Results;
//     console.log(recipes[0].Title);
    // $('#title').text(recipes[0].Title);
    // $('#category').text(recipes[0].Category);
    // $('#servings').text(recipes[0].Servings);
    // $('#photo-url').html(`<img src=${recipes[0].PhotoUrl}>`);
//   })
// 