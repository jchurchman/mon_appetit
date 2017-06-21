'use strict';

var app = app || {};

(function (module) {

  var users = {};
  users.findwhere = function(userCheck) {
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
  users.insert = function(name, userName, password) {
    console.log('in users insert');
    $.put('/addUser', {name: name, userName: userName, password: password})
      .then((data) => {console.log('got new data', data)});
  }

  module.users = users;
})(app);