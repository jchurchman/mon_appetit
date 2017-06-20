'use strict';

var app = app || {};
page('/', init);
// page('/login', init);
page('/dashboard', init);
page('/myRecipes', init);
page('/searchRecipes', init);
page('/test', init);
page();

function init(ctx, next) {
  next(ctx);
}