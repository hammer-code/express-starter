var express = require('express');

var app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/', function (request, response) {
  var data = { name: 'hammercode' };

  response.render('index', data);
});

app.get('/about', function (request, response) {
  var data = { memberCount: 50 };

  response.render('about', data);
});

module.exports = app;