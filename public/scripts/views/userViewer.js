'use strict';

var app = app || {};

(function (module) {
  const userViewer = {};
  
  userViewer.greetUser = () => {
    let name = app.user.userInfo.name;
    $('#dashboard h2').text(`Hello ${name}! What do you want to cook today?`);
  }

  module.userViewer = userViewer;
}(app));