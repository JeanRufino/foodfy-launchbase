const data = require('../data');
const fs = require('fs');

module.exports = {
    index: function(req, res) {
        return res.render('admin/index', { recipes: data.recipes });
    },
    show: function(req, res) {
        const { index } = req.params;

        return res.render(`admin/recipe`, { recipe: data.recipes[index], index })
    },
    create: function(req, res) {

        return res.render('admin/create');
    },
    edit: function(req, res) {
        const { index } = req.params;
        const recipe = data.recipes[index];

        return res.render('admin/edit', { recipe, index }, );
    },
    post: function(req, res) {
        let { image, title, author, ingredients, preparation, information } = req.body;
        
        let keys = Object.keys(req.body);

        for(let key of keys) {
            if(req.body[key] == '') return res.send('Faltou!');
        }

        const newRecipe = { 
            ...req.body,
            information: information.trim() 
        }

        data.recipes.push(newRecipe);

        fs.writeFile('data.json', JSON.stringify(data, null, 4), function(err) {
            if(err) res.send('Writefile error!');

            return res.redirect('/admin/recipes');
        });
    },
    put: function(req, res) {
        const { index } = req.params;

        const editedRecipe = {
            ...req.body,
            information: req.body.information.trim()        
        }

        data.recipes[index] = editedRecipe;

        fs.writeFile('data.json', JSON.stringify(data, null, 4), function(err){
            if(err) res.send('Writefile error!');

            res.redirect(`/admin/recipes/${index}`);
        });
    },
    delete: function(req, res) {
        const { index } = req.params;

        const filteredRecipes = data.recipes.filter(function(recipe) {
            return (data.recipes[index] != recipe)
        });

        data.recipes = filteredRecipes;

        fs.writeFile('data.json', JSON.stringify(data, null, 4), function(err){
            if(err) return res.send('Writefile error!');


            return res.redirect('/admin/recipes');
        });
    },
}