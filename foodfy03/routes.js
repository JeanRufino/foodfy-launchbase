const express = require('express');
const router = express.Router();
const users = require('./controllers/users');
const admin = require('./controllers/admin');

router.get('/', users.index);
router.get('/about', users.about);
router.get('/recipes', users.recipes);
router.get('/recipes/:id', users.show);

router.get('/admin/recipes', admin.index);
router.get('/admin/recipes/:index', admin.show);
router.get('/admin/create', admin.create);
router.get('/admin/:index/edit', admin.edit);
router.post('/admin', admin.post);
router.put('/admin/:index', admin.put);
router.delete('/admin/:index', admin.delete);

module.exports = router;