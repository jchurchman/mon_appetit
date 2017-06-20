'use strict';


var userAuthentication = {};
var userCheck = [];

userAuthentication.check = (ctx, next) => {
  event.preventDefault();
  let userName = $('#username').val();
  let password = $('#password').val();
  userCheck = [userName, password];
  // if passes then go nest() to dashboard route
  // next()
Users.findwhere(userName, password);
};