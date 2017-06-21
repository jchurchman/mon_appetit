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


  // // var recipes = [];
  // $('.fills').on('click', function () {
  //   // var data = proxyBigOven();
  //   $.get('https://api2.bigoven.com/recipes?any_kw=chicken&rpp=5&api_key=1x9xx03CdK3xioV1W8sJXRT3RWw01YAN', function (data) {
  //     console.log('in recipeController', data);
  //     recipes = data.Results;
  //     console.log(recipes[0].Title);
  //     for (var i = 0; i < data.Results.length; i++) {
  //       console.log(data.Results.length);
  //       // debugger;
  //       // $('#title').text(recipes[i].Title);
  //       // $('#category').text(recipes[i].Category);
  //       // $('#servings').text(recipes[i].Servings);
  //       // $('#photo-url').html(`<img src=${recipes[i].PhotoUrl}>`);
  //       $('#test-list').append(recipes[i].Title);
  //     }
  //   })
  // })

  // $(document).ready(function () {
  //   $('#search-button').click(function () {
  //     app.recipe.requestRecipes(function () {
  //       console.log('the error is here!', 'app: ' + app);
  //     });
  //   });
  // });
  module.recipeController = recipeController;
}(app));