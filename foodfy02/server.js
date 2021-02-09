const express = require('express');
const nunjucks = require('nunjucks');
const recipes = require('./data');

const server = express();

server.use(express.static('public'));

server.set('view engine', 'njk');

nunjucks.configure('views', {
    express: server,
    autoescape: false,
    noCache: true
});

server.get('/', function(req, res) {
    res.render('index', { recipes });
});

server.get('/about', function(req, res) {
    res.render('about');
});

server.get('/recipes', function(req, res) {
    res.render('recipes', { recipes });
});

server.get('/recipes/:id', function(req, res) {
    const id = req.params.id;

    res.render('recipe', { card: recipes[id] });
});

server.listen(5000);
