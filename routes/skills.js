var express = require('express');
var router = express.Router();

// Require controller with CRUD functions.
const skillsCtrl = require('../controllers/skills');

// GET /todos (index)
router.get('/', skillsCtrl.index);

// GET /todos/:id
router.get('/:id', skillsCtrl.show);

module.exports = router;
