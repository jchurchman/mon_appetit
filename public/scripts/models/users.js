'use strict';
var Users = {};
Users.findwhere = function(userName, password) {
  console.log('in users findwhere', userName, password);
  $.get('/login', { userName: userName, password: password  })
    .then((data) => console.log('got data', data));
};