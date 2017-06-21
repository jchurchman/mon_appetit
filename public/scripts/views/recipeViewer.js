'use strict';

var app = app || {};

(function (module) {
  const recipeViewer = {};

  recipeViewer.showRandomRecipe = () => {
    app.recipe.getRandom();
    console.log('got random recipe, need to put it in the DOM');
  }

  recipeViewer.displayRecipes = (recipeArray) => {
    
    //takes recipe array and populates page with minimized recipe cards
  }

  module.recipeViewer = recipeViewer;
}(app))