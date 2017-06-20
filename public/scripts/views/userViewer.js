'use strict';

$('#login button').on('click', app.userAuthentication.check);

$('#signup').on('submit', app.userAuthentication.create);