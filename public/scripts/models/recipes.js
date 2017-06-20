'use strict'

var categories = [];

// Return list of recipe categories from API and populate select input on form
(function () {
    $.ajax({
        type: 'GET',
        url: 'https://api2.bigoven.com/recipe/categories?api_key=1x9xx03CdK3xioV1W8sJXRT3RWw01YAN',
        dataType: 'json',
        success: function (data) {
            let filterCategories = function (category) {
                return category.ParentID === 0;
            }
            categories = data.filter(filterCategories);

            $.each(categories, function (i, item) {
                $('#category-search').append($('<option>', {
                    value: item.ID,
                    text: item.Category
                }));
            });
        }
    });

})();

function submitSearch(text, selection) {
    var pre_url = 'https://api2.bigoven.com/recipes?';
    var rpp = 20;
    console.log(pre_url);
    var apiRequest = `${process.env.PRE_URL} any_kw=${text} & include_cat= ${selection} & rpp= ${process.env.RPP} & api_key= ${process.env.API_KEY}`;
    console.log(apiRequest);
    $.get(apiRequest, function (data) {
        console.log('api response: ', data);
        recipes = data.Results;
        console.log(recipes[0].Title);
        $('#title').text(recipes[0].Title);
        $('#category').text(recipes[0].Category);
        $('#servings').text(recipes[0].Servings);
        $('#photo-url').html(`<img src=${recipes[0].PhotoUrl}>`);
    })
}

$(document).ready(function () {
    $('#search-button').click(function () {
        submitSearch($('#text-search').val(), $('category-search').val());
    });
});