'use strict';

var app = app || {};

(function (module) {
  const recipeViewer = {};

  recipeViewer.showRandomRecipe = () => {
    app.recipe.getRandom();
    console.log('got random recipe, need to put it in the DOM');
  }
  module.recipeViewer = recipeViewer;
}(app))