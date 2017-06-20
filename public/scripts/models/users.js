'use strict';

var app = app || {};

(function (module) {

  var users = {};
  users.findwhere = function (userCheck) {
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

  
  module.users = users;
})(app);