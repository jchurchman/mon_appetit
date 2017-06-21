'use strict';


$('#login button').on('click', app.userAuthentication.check);

$('#signup').on('submit', app.userAuthentication.create);

var app = app || {};

(function (module) {
  const userViewer = {};
  
  userViewer.greetUser = () => {
    console.log('app.userViewer.greetUser was called');
    let name = app.user.userInfo.name;
    $('#dashboard h2').text(`Hello ${name}! What do you want to cook today?`);
  }

  userViewer.initMySearchPage = () => {
    console.log('app.userViewer.initMySearchPage was called');
    app.userViewer.showMyRecipes();
    app.userViewer.showMySearch();
  }

  userViewer.showMySearch = () => {
    console.log('app.userViewer.showMySearch was called');
    $('#searchMy').show().siblings().hide();
    // $('#searchMy select').hide();
    // $('#searchMy label').hide();
  }

  userViewer.showMyRecipes = () => {
    console.log('app.userViewer.showMyRecipes was called');
    //call to user model to grab user's recipes and populate them
  }

  module.userViewer = userViewer;
}(app));

