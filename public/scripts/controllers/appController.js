'use strict';
var app = app || {};

(function (module) {
  const appController = {};

  appController.index = function () {
    console.log('app.appController.index was called');
    app.appViewer.initIndexApp();
    $('#login').on('click', 'a', app.appViewer.showSignUp);
    $('#signup').on('click', 'a', app.appViewer.showLogIn);
    app.user.logInListener();
    app.user.signUpListener();
  }

  appController.initDashboard = function () {
    console.log('app.appController.initDashboard was called');
    app.appViewer.showDashboard();
    app.recipeViewer.showRandomRecipe();
    app.userViewer.greetUser();
  }

  appController.initSearchAll = function () {
    console.log('app.appController.initSearchAll was called');
    app.appViewer.showSearchAll();
    app.recipeController.initCategoryFilter();
    app.recipeController.searchListener();
    $('#searchAll .card-container').show();
    $('#recipe-container').hide();
  }

  appController.logout = () => {
    app.recipe.queriedRecipes = ['greek salad'];
    app.user.userRecipes = [];
    app.user.userInfo = [];
    page('/');
  }

  module.appController = appController;
}(app))