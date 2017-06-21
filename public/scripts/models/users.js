
'use strict';

var app = app || {};

(function (module) {

  var user = {};
  user.findwhere = function(userCheck) {
    console.log('in users findwhere', userCheck);
    $.get('/login', { userCheck: userCheck })
      .then((data) => { //console.log('got data', data));
        if (data.length === 0) {
          $('#login p:first').text('User name and password not found.');
        } else {
          console.log('user found');
          page('/dashboard');
        }

      })
  };
  user.insert = function(name, userName, password) {
    console.log('in users insert');
    $.put('/addUser', {name: name, userName: userName, password: password})
      .then((data) => {console.log('got new data', data)});
  }

  user.userInfo = {};

  user.userRecipes = [];

  user.logInListener = () => {
    console.log('app.user.logInListener was called');
    $('#login').on('click', 'button', app.userController.checkPreviousUsers);

  }

  user.signUpListener = () => {
    console.log('app.user.signUpListener was called');
    $('#username').on('change', app.user.checkUserName);
    $('#confirm-password').on('change', user.confirmPassword);
    $('#signup button').hide();
    // .on('click', 'button', app.user.saveNewUser)
  }

  user.saveNewUser = () => {
    event.preventDefault();
    app.user.checkUserName();
    app.user.saveUserCredentials();
    page('/dashboard');
  }

  user.confirmPassword = function () {
    console.log('app.user.confirmPassword was called');
    ($(this).val() !== $('#new-password').val()) ? ($('#signup p:first').text('Passwords do not match!')) : ($('#signup p:first').text('Passwords match.'), $('#signup button').show());
  }

  user.checkUserName = () => { console.log('app.user.checkUserName is undefined') }; //perhaps returns a boolean?
  user.checkPassword = () => { console.log('app.user.checkPassword is undefined') };
  user.queryUserCredentials = () => {
    console.log('app.user.queryUserCredentials was called');
    event.preventDefault();
    page('/dashboard');
  }

  user.saveUserCredentials = () => {
    console.log('app.user.saveUserCredentials was called');
  };

  user.queryUserRecipes = () => {
    event.preventDefault();
    console.log('app.user.queryUserRecipes is undefined')
  }

  module.user = user;
}(app));

