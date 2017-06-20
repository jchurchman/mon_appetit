'use strict';

var app = app || {};
page('/', init, app.appController.index);
page('/dashboard', init, app.appController.initDashboard);
page('/myRecipes', init);
page('/searchRecipes', init);

page();

function init(ctx, next) {
  next(ctx);
}