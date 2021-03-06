'use strict';

var app = app || {};

(function (module) {
  const recipeViewer = {};

  recipeViewer.initCategoryFilter = function() {
    $.get(`/bigoven/categories`, function (data) {
      let filterCategories = function (category) {return category.ParentID === 0;}
      let categories = data.filter(filterCategories);
      $.each(categories, function (i, item) {
        $('#category-search').append($('<option>', {
          value: item.ID,
          text: item.Category
        }));
      });
    })
  }

  recipeViewer.showRandomRecipe = () => {
    app.recipe.getRandom();
    console.log('got random recipe, need to put it in the DOM');
  }

  recipeViewer.renderRecipeCard = Handlebars.compile($('#recipe-card-template').text());

  recipeViewer.populateRecipeCards = function (appendTarget) {
    appendTarget.append(app.recipe.queriedRecipes.map(app.recipeViewer.renderRecipeCard));
    app.recipeController.recipeDetailListener();
    app.recipeController.saveRecipeListener();
  }

  recipeViewer.renderDetailedRecipe = function(data) {
    var template = Handlebars.compile($('#recipe-detail-template').text());
    return template(data);
  };

  recipeViewer.renderRecipeIngredients = function(data) {
    var ingredientsTemplate = Handlebars.compile($('#recipe-ingredients-template').text());
    return ingredientsTemplate(data);
  }

  recipeViewer.populateDetailedRecipe = function (data) {
    $('#recipe-container').html(' ');
    $('#recipe-container').append(app.recipeViewer.renderDetailedRecipe(data));
    $('#recipe-container table').append(data.Ingredients.map( ingredient => app.recipeViewer.renderRecipeIngredients(ingredient) ))
    app.recipeController.saveRecipeListener();
    app.recipeController.backToSearchListener();
  }

  recipeViewer.showDetailedRecipe = () => {
    $('.card-container').parent().hide();
    $('#recipe-container').show();
  }

  module.recipeViewer = recipeViewer;
}(app));