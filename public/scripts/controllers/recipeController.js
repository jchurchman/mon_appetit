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
      let text = $('#text-search').val();
      let selected = $('#category-search option:selected').text().toLowerCase();
      // page(`/searchRecipes/${text}/${selected}`)
      app.recipe.requestRecipes(text, selected, app.recipeViewer.populateRecipeCards)
    });
  }

  recipeController.recipeDetailListener = () => {
    $('#card-container').on('click', '.view', () => {
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
      app.recipe.saveRecipe(targetId);
    })
  }


  recipeController.backToSearchListener = () => {
    $('.back').on('click', () => {
      console.log('back button hit!');
      window.history.back();
    })
  }

  module.recipeController = recipeController;
}(app));