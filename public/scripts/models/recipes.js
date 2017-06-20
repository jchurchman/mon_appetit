'use strict'
var app = app || {};

(function (module) {
  const recipe = {};

  recipe.getRandom = () => {
    console.log('getting random recipe');
  }

  module.recipe = recipe;
}(app))