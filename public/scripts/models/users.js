'use strict'
var app = app || {};

(function (module){
  const user = {};

    user.userInfo = {};
    
    user.logInListener = () => {
      $('#login').on('click', 'button', app.user.queryUserCredentials);
    }

    user.signUpListener = () => {
      $('#username').on('change', app.user.checkUserName);
      $('#confirm-password').on('change', user.confirmPassword);
    }

    user.confirmPassword = function() {
      ($(this).val() !== $('#new-password').val()) ? ($('#signup p:first').text('Passwords do not match!')) : ($('#signup p:first').text('Passwords match.'));
    }

    user.checkUserName = () => {};
    user.checkPassword = () => {};
    user.queryUserCredentials = () => {
      event.preventDefault();
      page('/dashboard')
    }

  module.user = user;
}(app));