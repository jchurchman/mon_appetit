'use strict';

var app = app || {};

(function (module) {
  const recipeController = {};

  recipeController.searchListener = () => {
    $('#searchAll').on('submit', () => {
      event.preventDefault();
      $('.card-container').html(' ');
      let appendTarget = $(event.target).siblings('.card-container');
      console.log('$(event.target) is ', appendTarget);
      let text = $('#text-search').val();
      let selected = $('#category-search option:selected').text().toLowerCase();
      app.recipe.requestRecipes(text, selected, appendTarget, app.recipeViewer.populateRecipeCards)
    });
  }

  recipeController.recipeDetailListener = () => {
    $('.card-container').on('click', '.view', () => {
      event.preventDefault();
      var targetId = $(event.target).parent().data('recipeid');
      app.recipe.getSingleRecipe(targetId, app.recipeViewer.populateDetailedRecipe)
      page('/expandRecipe')
    })

  }

  recipeController.saveRecipeListener = () => {
    $('section').on('click', '.add', () => {
      event.preventDefault();
      var targetId = $(event.target).parent().data('recipeid');
      var targetPhoto = $(event.target).siblings('img').attr('src');
      var targetTitle = $(event.target).siblings('.title').text();
      app.recipe.saveRecipe(targetId, targetTitle, targetPhoto);
    })
  }

  recipeController.backToSearchListener = () => {
    $('.back').on('click', () => {
      window.history.go(-2);
    })
  }

  module.recipeController = recipeController;
}(app));