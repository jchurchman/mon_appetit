'use strict'
var app = app || {};

(function (module) {
  function Recipe(rawDataObj) {
    Object.keys(rawDataObj).forEach(key => this[key] = rawDataObj[key]);
  }
  const recipe = {};

  recipe.queriedRecipes = [];

  recipe.getRandom = () => {
    console.log('app.recipe.getRandom is undefined');
  }

  recipe.queryRecipes = () => {

  };

  module.recipe = recipe;
}(app))