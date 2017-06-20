'use strict';
var app = app || {};

(function (module) {
    const appController = {};

    appController.index = function () {
        $('*').hide();
        $('#welcome').show();
        $('#login').hide();

    }

    module.appController = appController;
}(app))