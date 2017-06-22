'use strict';

var app = app || {};
page('/', init, app.appController.index);
page('/dashboard', init, app.appController.initDashboard);
page('/myRecipes', init, app.userController.init);
page('/myRecipes/*', init);
page('/searchRecipes', init, app.appController.initSearchAll);
page('/searchRecipes/*', init);
page('/expandRecipe', init, app.recipeViewer.showDetailedRecipe);
page('/logout', app.appController.logout);

page('/test', init);
page();

function init(ctx, next) {
  console.log('routes.js init function was called')
  console.log('ctx is ', ctx);
  next(ctx);
}