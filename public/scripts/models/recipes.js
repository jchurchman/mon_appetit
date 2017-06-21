'use strict'
var app = app || {};
var categories = [];
// var recipes = [];


// Return list of recipe categories from API and populate select input on form
(function (module) {
    const recipe = {};
    $.ajax({
        type: 'GET',
        url: 'https://api2.bigoven.com/recipe/categories?api_key=1x9xx03CdK3xioV1W8sJXRT3RWw01YAN',
        dataType: 'json',
        success: function (data) {
            let filterCategories = function (category) {
                return category.ParentID === 0;
            }
            categories = data.filter(filterCategories);

            $.each(categories, function (i, item) {
                $('#category-search').append($('<option>', {
                    value: item.ID,
                    text: item.Category
                }));
            });
        }
    });

  recipe.queriedRecipes = [];

  recipe.getRandom = () => {
    console.log('app.recipe.getRandom is undefined');
  }

  recipe.queryRecipes = () => {

  };
  
    recipe.requestRecipes = function () {
        var text = $('#text-search').val();
        var selected = $('#category-search option:selected').text().toLowerCase();
        console.log('search button was clicked, then requestRecipes was called');
        var recipeRequest = $.get(`/searchRecipes/${text}/${selected}`);
        console.log('recipeRequest: ' + recipeRequest);
            // .then(
            // console.log(recipes),
            // // console.log(recipes[0].Title),
            // $('#title').text(recipes[0].Title),
            // $('#category').text(recipes[0].Category),
            // $('#servings').text(recipes[0].Servings),
            // $('#photo-url').html(`<img src=${recipes[0].PhotoUrl}>`))
            // .then(callback);
    }
    module.recipe = recipe;
})(app);

$(document).ready(function () {
    $('#search-button').click(app.recipe.requestRecipes);

});
