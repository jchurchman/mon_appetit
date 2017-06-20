'use strict';
var app = app || {};

(function (module) {
  const userController = {};

  userController.init = () => {
    console.log('app.userController.init was called');
    app.userViewer.initMySearchPage();
    $('#searchMy').on('click', 'button', app.user.queryUserRecipes)
  }


  module.userController = userController;
}(app))