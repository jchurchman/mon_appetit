'use strict';
var app = app || {};

(function (module) {
  const appController = {};

  appController.index = function () {
    app.appViewer.initIndexApp();
    $('#login').on('click', 'a', app.appViewer.showSignUp);
    $('#signup').on('click', 'a', app.appViewer.showLogIn);
    app.user.logInListener();
    app.user.signUpListener();
  }

  appController.initDashboard = function () {
    app.appViewer.showDashboard();
    app.recipeViewer.showRandomRecipe();
    app.userViewer.greetUser();
  }

  appController.initSearchAll = function () {
    app.appViewer.showSearchAll();
    app.recipeController.searchListener();
    $('#searchAll .card-container').show();
    $('#recipe-container').hide();
  }

  appController.logout = () => {
    app.recipe.queriedRecipes = [];
    app.user.userInfo = [];
    page.redirect('/');
  }

  module.appController = appController;
}(app))