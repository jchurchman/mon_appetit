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

  recipe.requestRecipes = function (text, selected, callback) {
    // var text = $('#text-search').val();
    // var selected = $('#category-search option:selected').text().toLowerCase();
    console.log('search button was clicked, then requestRecipes was called');
    $.get(`/bigoven/${text}/${selected}`, function (data) {
      app.recipe.queriedRecipes = data.Results;
      callback();
    }, 'json');
    // page(`/searchRecipes/${text}/${selected}`)
  }

  recipe.getSingleRecipe = function (targetId, callback) {
    $.get(`/bigoven/${targetId}`, function (data) {
      console.log('data.Title is ', data.Title);
      app.recipe.singleRecipe = data;
      callback(data);
    }, 'json');
  }

  recipe.saveRecipe = function (recipeId) {
    // let recipeId = $(this).data('recipeid').val();
    let userId = app.user.userInfo.user_id;
    $.post('/myRecipes', { recipeId: recipeId, userId: userId }, response => console.log(response), 'json');
  }


  module.recipe = recipe;
}(app));


