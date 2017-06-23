'use strict';

var app = app || {};

(function (module) {
  const recipeController = {};

  recipeController.initCategoryFilter = function () {  //TODO: Move to recipes.js
    $.ajax({
      type: 'GET',
      url: `https://api2.bigoven.com/recipe/categories?api_key=1x9xx03CdK3xioV1W8sJXRT3RWw01YAN`,
      dataType: 'json',
      success: function (data) {
        let filterCategories = function (category) {
          return category.ParentID === 0;
        }
        let categories = data.filter(filterCategories);
        $.each(categories, function (i, item) {
          $('#category-search').append($('<option>', {
            value: item.ID,
            text: item.Category
          }));
        });
      }
    });
  }

  recipeController.searchListener = () => {
    $('#searchAll').on('submit', () => {
      event.preventDefault();
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
      var targetTitle = $(event.target).siblings('h3').text();  //TODO: grab sibling via class
      app.recipe.saveRecipe(targetId, targetTitle, targetPhoto);
    })
  }

  recipeController.backToSearchListener = () => {
    $('.back').on('click', () => {
      window.history.back();
    })
  }

  module.recipeController = recipeController;
}(app));