
'use strict';

var app = app || {};

(function (module) {

  var user = {};

  user.findwhere = function(userCheck) {
    $.get('/login', { userCheck: userCheck })
      .then((userInfo) => {
        if (userInfo.length < 1) {
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
    $('#signup .username').on('change', app.user.checkUserName);
    $('#confirm-password').on('change', user.confirmPassword);
    $('#signup submit').hide();
  }

  // user.saveNewUser = () => {
  //   event.preventDefault();
  //   app.user.saveUserCredentials();
  //   page('/dashboard');
  // }

// TODO: check login/signup routes
  user.checkUserName = () => { 
    var suppliedUserName = $('#signup .username').val();
    console.log('suppliedUserName is ', suppliedUserName);
    $.get('/checkUserName', { username: suppliedUserName })
      .then((userNameCheck) => {
        if(userNameCheck.length < 1) {
          $('#signup submit').on('submit', app.user.saveUserCredentials);
        } else {
          $('#signup p:first').text('User name already exists.');
        }
      })
  };


  user.saveUserCredentials = () => {
    event.preventDefault();
    const name = $('#signup .name').val();
    const username = $('#signup .username').val();
    const password = $('#signup .confirm-password').val();
    console.log('app.user.saveUserCredentials was called');
    $.put('/addUser', {name: name, username: username, password: password})
      .then((data) => {
        user.userInfo = [username, password, name]
        console.log('got new data', data)
        page('/dashboard');
      })
  };

  module.user = user;
}(app));

