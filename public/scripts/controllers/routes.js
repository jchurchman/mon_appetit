'use strict';

var app = app || {};
page('/', init, app.appController.index);
page('/dashboard', init, app.appController.initDashboard);
page('/myRecipes', init, app.userController.init);
page('/searchRecipes', init, app.appController.initSearchAll);
page('/expandRecipe', init, app.recipeViewer.showDetailedRecipe);
page('/logout', app.appController.logout);

page();

function init(ctx, next) {
  next(ctx);
}