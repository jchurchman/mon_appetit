'use strict'
var app = app || {};

(function (module) {

  const recipe = {};

  function Recipe(rawRecipeObj) {
    this.recipe_id = rawRecipeObj.RecipeID,
    this.category = rawRecipeObj.Category,
    this.photo_url = rawRecipeObj.PhotoUrl,
    this.title = rawRecipeObj.Title
  }

  recipe.getRandom = () => { //TODO: complete this function
    console.log('app.recipe.getRandom is undefined');
  }

  recipe.requestRecipes = function (text, selected, appendTarget, callback) { //TODO:refactor to accept one parameter
    $.get(`/bigoven/${text}/${selected}`, function (data) {
      app.recipe.queriedRecipes = data.Results.map( apiRecipeObj => new Recipe(apiRecipeObj) );
      console.log('app.recipe.queriedRecipes is ', app.recipe.queriedRecipes);
      callback(appendTarget);
    }, 'json');
  }

  recipe.getMyRecipes = function (appendTarget, userId) {
    $.get('/myRecipes', { userId: userId })
      .then((userInfo) => {
        if (userInfo.length < 1) {
          $('#searchMy .card-container').html('<h3>No recipes found</h3>');
        } else {
          $('#searchMy .card-container').html(' ');
          app.recipe.queriedRecipes = userInfo;
          app.recipeViewer.populateRecipeCards(appendTarget);
        }

      })
  }

  recipe.getSingleRecipe = function (targetId, callback) {
    $.get(`/bigoven/${targetId}`, function (data) {
      app.recipe.singleRecipe = data;
      callback(data);
    }, 'json');
  }

  recipe.saveRecipe = function (recipeId, recipeTitle, recipeImgUrl) {
    let userId = app.user.userInfo.user_id;
    $.post('/myRecipes', { recipeId: recipeId, userId: userId, recipeTitle: recipeTitle, PhotoUrl: recipeImgUrl }, response => console.log(response), 'json');
  }

  module.recipe = recipe;

}(app));


