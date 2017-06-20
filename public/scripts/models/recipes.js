'use strict'
var app = app || {};

(function (module) {
  const recipe = {};

  recipe.queriedRecipes = [];

  recipe.getRandom = () => {
    console.log('app.recipe.getRandom is undefined');
  }

  recipe.queryRecipes = () => {

  };

  module.recipe = recipe;
}(app))