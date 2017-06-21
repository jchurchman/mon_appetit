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
    console.log('app.recipe.queriedRecipes: ' + app.recipe.queriedRecipes);
    $('#card-container').append(app.recipe.queriedRecipes.map(app.recipeViewer.renderRecipeCard));
  }

  module.recipeViewer = recipeViewer;
}(app));