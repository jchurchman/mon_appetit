'use strict'
var app = app || {};

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
  }

  recipe.getSingleRecipe = function (callback) {
    let recipeId = $(this).data('recipeid').val();
    $.get(`/searchRecipes/${recipeId}`, function (data) {
      app.recipe.singleRecipe = data.Results;
      callback();
    }, 'json');
  }

  recipe.saveRecipe = function () {
    let recipeId = $(this).data('recipeid').val();
    let userId = app.user.userInfo.user_id;
    $.post('/myRecipes', {recipeId: recipeId, userId: userId}, response => console.log(response), 'json');
  }
  }

  module.recipe = recipe;
})(app);


