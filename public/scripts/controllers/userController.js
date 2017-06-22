'use strict';

var app = app || {};

(function (module) {
  const userController = {};

  userController.checkPreviousUsers = () => {
    event.preventDefault();
    console.log('in usercontroller');
    let userCheck = [];
    const userName = $('#username').val();
    const password = $('#password').val();
    userCheck = [userName, password];
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
    console.log('app.userController.init was called');
    app.userViewer.initMySearchPage();
    $('#searchMy').on('submit', app.user.queryUserRecipes);
    $('#searchMy').show().siblings().hide();
  }


  module.userController = userController;

})(app);
