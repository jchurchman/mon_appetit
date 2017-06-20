'use strict';
var recipes = [];
$('.fill').on('click', function(){
  // var data = proxyBigOven();
  $.get('https://api2.bigoven.com/recipes?any_kw=chicken&rpp=1&api_key=1x9xx03CdK3xioV1W8sJXRT3RWw01YAN', function(data) {
    console.log('in recipeController', data);
    recipes = data.Results;
    console.log(recipes[0].Title);
    $('#title').text(recipes[0].Title);
    $('#category').text(recipes[0].Category);
    $('#servings').text(recipes[0].Servings);
    $('#photo-url').html(`<img src=${recipes[0].PhotoUrl}>`);
  })
})