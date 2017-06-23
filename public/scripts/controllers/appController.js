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
    app.recipeController.initCategoryFilter();
    app.recipeController.searchListener();
    $('#searchAll .card-container').show();
    $('#recipe-container').hide();
  }

  appController.logout = () => {
    app.recipe.queriedRecipes = [];
    app.user.userInfo = [];
    // $('#login').children('input[type=text]').val(' ');
    // console.log($('#login').children('input[type=text]'))
    // $('#login').children('input[type=password]').val(' ');
    // $('#signup').children('input[type=text]').val(' ');//TODO: need to figure out how to make this work
    // $('#signup').children('input[type=password]').val(' ');//TODO: need to figure out how to make this work
    page.redirect('/');
  }

  module.appController = appController;
}(app))