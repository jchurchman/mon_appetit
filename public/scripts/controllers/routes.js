'use strict';

var app = app || {};
page('/', init);
page('/dashboard', init);
page('/myRecipes', init);
page('/searchRecipes', init);

page();

function init(ctx, next) {
  next(ctx);
}