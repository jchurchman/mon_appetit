'use strict';

var app = app || {};

(function (module) {
  const recipeController = {};

  recipeController.initCategoryFilter = function () {
    console.log('app.recipeController.initCategoryFilter was called')
    $.ajax({
      type: 'GET',
      url: 'https://api2.bigoven.com/recipe/categories?api_key=1x9xx03CdK3xioV1W8sJXRT3RWw01YAN',
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
      app.recipe.requestRecipes(app.recipeViewer.populateRecipeCards)
    });
  }

  recipeController.recipeDetailListener = () => {
    $('.foo').on('click', () => {
      event.preventDefault();
      alert('hi');
    })
  }

  module.recipeController = recipeController;
}(app));