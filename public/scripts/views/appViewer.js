'use strict';

var app = app || {};

(function (module) {
  const appViewer = {};

  appViewer.initIndexApp = () => {
    $('header').hide();
    $('#welcome').show().siblings().hide();
    $('#signup').hide();
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
    app.userViewer.showMyRecipes();
    $('header').show();
  }

  appViewer.showSearchAll = () => {
    $('#searchAll').show().siblings().hide();
  }

  module.appViewer = appViewer;
}(app));