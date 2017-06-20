'use strict';

var app = app || {};

(function (module) {
  const appViewer = {};

  appViewer.initIndexApp = () => {
      $('#welcome').show().siblings().hide();
      $('#mainnav').hide();
      $('#login').hide();
    }

  appViewer.showSignUp = () => {
      $('#login').hide()
      $('#signup').show();
    }

  appViewer.showLogIn = () => {
      $('#signup').hide()
      $('#login').show();
    }

  appViewer.showDashboard = () => {
      $('#dashboard').show().siblings().hide();
      $('#mainnav').show();
    }

  module.appViewer = appViewer;
}(app));