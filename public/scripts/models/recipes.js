'use strict'
var app = app || {};

(function (module) {

  const recipe = {};

  recipe.getRandom = () => { //TODO: complete this function
    console.log('app.recipe.getRandom is undefined');
  }

  recipe.requestRecipes = function (text, selected, callback) { //TODO:refactor to accept one parameter
    $.get(`/bigoven/${text}/${selected}`, function (data) {
      app.recipe.queriedRecipes = data.Results;
      callback();
    }, 'json');
  }

  recipe.getSingleRecipe = function (targetId, callback) {
    $.get(`/bigoven/${targetId}`, function (data) {
      app.recipe.singleRecipe = data;
      callback(data);
    }, 'json');
  }

  recipe.saveRecipe = function (recipeId, recipeTitle, recipeImgUrl) {
    let userId = app.user.userInfo.user_id;
    $.post('/myRecipes', { recipeId: recipeId, userId: userId, recipeTitle: recipeTitle, PhotoUrl: recipeImgUrl }, response => console.log(response), 'json');
  }

  module.recipe = recipe;

}(app));


