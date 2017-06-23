
'use strict';

var app = app || {};

(function (module) {

  var user = {};

  user.findwhere = function(userCheck) {
    $.get('/login', { userCheck: userCheck })
      .then((userInfo) => {
        if (userInfo === null) {
          $('#login p:first').text('User name and password not found.');
        } else {
          user.userInfo = userInfo;
          $('#login input[type=text]').val('');
          $('#login input[type=password]').val('');
          $('#signup input[type=text]').val('');
          $('#signup input[type=password]').val('');
          app.userViewer.showMyRecipes();
          app.recipeViewer.initCategoryFilter();
          page('/dashboard');
        }

      })
  };

  user.logInListener = () => {
    $('#login').on('submit', app.userController.checkPreviousUsers);

  }

  user.signUpListener = () => {
    $('#username').on('change', app.user.checkUserName);
    $('#confirm-password').on('change', user.confirmPassword);
    $('#signup submit').hide();
  }

  user.saveNewUser = () => {
    event.preventDefault();
    app.user.checkUserName();
    app.user.saveUserCredentials();
    page('/dashboard');
  }

// TODO: check login/signup routes
  user.checkUserName = () => { console.log('app.user.checkUserName is undefined') }; //perhaps returns a boolean?
  user.queryUserCredentials = () => {
    console.log('app.user.queryUserCredentials was called');
    event.preventDefault();
    page('/dashboard');
  }

  user.saveUserCredentials = () => {
    console.log('app.user.saveUserCredentials was called');
    $.put('/addUser', {name: name, userName: userName, password: password})
      .then((data) => {console.log('got new data', data)});
  };

  module.user = user;
}(app));

