'use strict';
var app = app || {};

(function (module) {
    const appController = {};

    appController.index = function () {
        console.log('app.appController.index was called');
        app.appViewer.initIndexApp();
        $('#login').on('click', 'a', app.appViewer.showSignUp);
        $('#signup').on('click', 'a', app.appViewer.showLogIn);
        app.user.logInListener();
        app.user.signUpListener();
    }

    appController.initDashboard = function () {
        console.log('app.appController.initDashboard was called');
        app.appViewer.showDashboard();
        app.recipeViewer.showRandomRecipe();
        app.userViewer.greetUser();
    }

    module.appController = appController;
}(app))