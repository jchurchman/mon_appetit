'use strict';

var app = app || {};

(function (module) {
  const userController = {};

  userController.checkPreviousUsers = () => { //TODO: make sure that previous users function still works
    event.preventDefault();
    const userCheck = [];
    const userName = $('#login .username').val();
    const password = $('#login .password').val();
    userCheck.push(userName);
    userCheck.push(password);
    app.user.findwhere(userCheck);
  };

  userController.passwordCheck = (password, password_two) => {
    password!== password_two ? $('#login p:first').text('Passwords do not match.') : password;
  };

  userController.create = () => {
    event.preventDefault();
    const name = $('#signup .name').val();
    const userName = $('#signup .username').val();
    const password = $('#signup .new-password').val();
    const password_two = $('#signup .confirm-password').val();
    app.userController.passwordCheck(password, password_two);
    app.users.insert(name, userName, password);
  }

  userController.init = () => {
    app.userViewer.showMySearch();
    app.recipe.getMyRecipes();
    $('#searchMy').on('submit', app.user.queryUserRecipes); //TODO: refactor to sort by category
  }

  module.userController = userController;

})(app);
