'use strict';

var app = app || {};
page('/', init, app.appController.index);
page('/dashboard', init, app.appController.initDashboard);
page('/myRecipes', init, app.userController.init);
page('/searchRecipes', init, app.appController.initSearchAll);

page();

function init(ctx, next) {
  console.log('routes.js init function was called')
  next(ctx);
}