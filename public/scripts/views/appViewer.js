'use strict';

var app = app || {};

(function (module) {
  const appViewer = {};

  appViewer.initIndexApp = () => {
    console.log('app.appViewer.initIndexApp was called');
    $('#mainnav').hide();
    $('#welcome').show().siblings().hide();
    $('#signup').hide();
  }

  appViewer.showSignUp = () => {
    console.log('app.appViewer.showSignUp was called');
    $('#login').hide()
    $('#signup').show();
  }

  appViewer.showLogIn = () => {
    console.log('app.appViewer.showLogIn was called');
    $('#signup').hide()
    $('#login').show();
  }

  appViewer.showDashboard = () => {
    console.log('app.appViewer.showDashboard was called');
    $('#dashboard').show().siblings().hide();
    $('#mainnav').show();
  }

  appViewer.showSearchAll = () => {
    $('#searchAll').show().siblings().hide();
    // $('#searchAll select').hide();
    // $('#searchAll label').hide();
  }

  module.appViewer = appViewer;
}(app));