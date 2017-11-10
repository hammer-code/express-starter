var express = require('express');
var bodyParser = require('body-parser');
var database = require('./database');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/', function (request, response) {
  database.Article.findAll()
    .then(function (articles) {
      var data = { blogPosts: articles };

      response.render('index', data);
    })
    .catch(function (err) {
      response.send(err);
    })
});

app.get('/create-article', function (request, response) {
  response.render('article-form');
});

app.post('/create-article', function (request, response) {
  database.Article.create({
    title: request.body.article_title,
    body: request.body.article_body,
  })
    .then(function () {
      response.redirect('/');
    })
    .catch(function (err) {
      response.send(err);
    });
});

module.exports = app;