'use strict';

var app = app || {};

(function (module) {
  const userController = {};

  userController.checkPreviousUsers = () => { //TODO: make sure that previous users function still works
    event.preventDefault();
    const userCheck = [];
    const userName = $('#username').val();
    const password = $('#password').val();
    userCheck.push(userName);
    userCheck.push(password);
    app.user.findwhere(userCheck);
  };

  userController.passwordCheck = (password, password_two) => {
    password!== password_two ? $('#login p:first').text('Passwords do not match.') : password;
  };

  userController.create = () => {
    event.preventDefault();
    const name = $('#name').val();
    const userName = $('#username').val();
    const password = $('#new-password').val();
    const password_two = $('#confirm-password').val();
    app.userController.passwordCheck(password, password_two);
    app.users.insert(name, userName, password);
  }

  userController.init = () => {
    app.userViewer.showMySearch();
    app.userViewer.showMyRecipes();
    $('#searchMy').on('submit', app.user.queryUserRecipes); //TODO: refactor to sort by category
  }

  module.userController = userController;

})(app);
