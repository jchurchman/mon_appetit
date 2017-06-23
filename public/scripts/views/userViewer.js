'use strict';

var app = app || {};

(function (module) {
  const userViewer = {};

  userViewer.greetUser = () => {
    let name = app.user.userInfo.name;
    $('#dashboard h2').html(`Hello ${name}! </br>What do you want to cook today?`);
  }

  userViewer.showMySearch = () => {
    $('#searchMy').show().siblings().hide();
  }

  userViewer.showMyRecipes = () => {
    let userId = app.user.userInfo.user_id;
    let appendTarget = $('#searchMy .card-container')
    app.recipe.getMyRecipes(appendTarget, userId);
  }

  module.userViewer = userViewer;
}(app));

