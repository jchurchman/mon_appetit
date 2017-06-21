'use strict';

var app = app || {};

(function (module) {
  var userAuthentication = {};
  var userCheck = [];

  userAuthentication.check = () => {
    event.preventDefault();
    const userName = $('#username').val();
    const password = $('#password').val();
    userCheck = [userName, password];
    // if passes then go next() to dashboard route
    app.users.findwhere(userCheck);
  };

  const passwordCheck = (password, password_two) => {
    password!== password_two ? $('#login p:first').text('Passwords do not match.') : password;
  };

  userAuthentication.create = () => {
    event.preventDefault();
    const name = $('#name').val();
    const userName = $('#username').val();
    const password = $('#new-password').val();
    const password_two = $('#confirm-password').val();
    passwordCheck(password, password_two);
    app.users.insert(name, userName, password);
  
  }

  const userController = {};

  userController.init = () => {
    console.log('app.userController.init was called');
    app.userViewer.initMySearchPage();
    $('#searchMy').on('click', 'button', app.user.queryUserRecipes)
  }


  module.userController = userController;

  module.userAuthentication = userAuthentication;
})(app);
