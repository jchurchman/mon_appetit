'use strict'
var app = app || {};

(function (module) {
  const recipe = {};

  recipe.getRandom = () => {
    console.log('app.recipe.getRandom is undefined');
  }

  module.recipe = recipe;
}(app))