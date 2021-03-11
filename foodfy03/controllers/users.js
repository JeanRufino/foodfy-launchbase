const data = require('../data');

module.exports = {
    index: function(req, res) {
        res.render('users/index', { recipes: data.recipes });
    },
    about: function(req, res) {
        res.render('users/about');
    },
    recipes: function(req, res) {
        res.render('users/recipes', { recipes: data.recipes });
    },
    show: function(req, res) {
        const id = req.params.id;
    
        res.render('users/recipe', { card: data.recipes[id] });
    }
}