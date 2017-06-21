'use strict'
var app = app || {};

// var recipes = [];


// Return list of recipe categories from API and populate select input on form
(function (module) {

// function Recipe(rawDataObj) {
//   Object.keys(rawDataObj).forEach(key => this[key] = rawDataObj[key]);
// }

  const recipe = {};

  recipe.queriedRecipes = ['greek salad'];

  recipe.getRandom = () => {
    console.log('app.recipe.getRandom is undefined');
  }

  recipe.requestRecipes = function (callback) {
    var text = $('#text-search').val();
    var selected = $('#category-search option:selected').text().toLowerCase();
    console.log('search button was clicked, then requestRecipes was called');
    $.get(`/searchRecipes/${text}/${selected}`, function (data) {
      app.recipe.queriedRecipes = data.Results;
      callback();
    }, 'json');
// .then(
// console.log(recipes),
// // console.log(recipes[0].Title),
// $('#title').text(recipes[0].Title),
// $('#category').text(recipes[0].Category),
// $('#servings').text(recipes[0].Servings),
// $('#photo-url').html(`<img src=${recipes[0].PhotoUrl}>`))
// .then(callback);
  }
  module.recipe = recipe;
})(app);


