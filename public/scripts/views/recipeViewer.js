'use strict';

var app = app || {};

(function (module) {
  const recipeViewer = {};

  recipeViewer.showRandomRecipe = () => {
    app.recipe.getRandom();
    console.log('got random recipe, need to put it in the DOM');
  }

  recipeViewer.renderRecipeCard = Handlebars.compile($('#recipe-card-template').text());
  
  recipeViewer.populateRecipeCards = function () {
    $('#searchAll .card-container').append(app.recipe.queriedRecipes.map(app.recipeViewer.renderRecipeCard));
    app.recipeController.recipeDetailListener();
    app.recipeController.saveRecipeListener();
  }

  recipeViewer.populateMyRecipes = function (userInfo) {
    console.log('in populateMyRecipes');
    $('#searchMy .card-container').append(userInfo.map(app.recipeViewer.renderRecipeCard));
    app.recipeController.recipeDetailListener();
    // app.recipeController.saveRecipeListener();
  }

  recipeViewer.renderDetailedRecipe = function(data) {
    var template = Handlebars.compile($('#recipe-detail-template').text());
    return template(data);
  };

  recipeViewer.renderRecipeIngredients = function(data) {
    var ingredientsTemplate = Handlebars.compile($('#recipe-ingredients-template').text());
    return ingredientsTemplate(data);
  }

  recipeViewer.populateDetailedRecipe = function (data) {
    console.log('recipeViewer.populateDetailedRecipe was called ', data);
    $('#recipe-container').html(' ');
    $('#recipe-container').append(app.recipeViewer.renderDetailedRecipe(data));
    $('#recipe-container table').append(data.Ingredients.map( ingredient => app.recipeViewer.renderRecipeIngredients(ingredient) ))
    app.recipeController.saveRecipeListener();
    app.recipeController.backToSearchListener();
  }

  recipeViewer.showDetailedRecipe = () => {
    $('.card-container').parent().hide();
    $('#recipe-container').show();
  }

  module.recipeViewer = recipeViewer;
}(app));