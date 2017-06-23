'use strict';

var app = app || {};

(function (module) {
  const userViewer = {};

  userViewer.greetUser = () => {
    let name = app.user.userInfo.name;
    $('#dashboard h2').text(`Hello ${name}! What do you want to cook today?`);
  }

  userViewer.initMySearchPage = () => {
    app.userViewer.showMyRecipes();
  }

  userViewer.showMySearch = () => {
    $('#searchMy').show().siblings().hide();
  }

  userViewer.showMyRecipes = () => {
    let userId = app.user.userInfo.user_id;

    $.get('/myRecipes', { userId: userId })
      .then((userInfo) => {
        if (userInfo.length < 1) { //TODO: this is ugly
          $('#searchMy .card-container').text('No recipes found');
        } else {
          console.log('userInfo at app.userViewer.showMyRecipes is ', userInfo);
          app.recipeViewer.populateMyRecipes(userInfo);
        }

      })

  }

  module.userViewer = userViewer;
}(app));

