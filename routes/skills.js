var express = require('express');
var router = express.Router();

// Require controller with CRUD functions.
const skillsCtrl = require('../controllers/skills');

// GET /skills (display all skills)
router.get('/', skillsCtrl.index);

// GET /skills/new (display new skill form)
router.get('/new', skillsCtrl.new);

// GET /skills/:id (display one skill)
router.get('/:id', skillsCtrl.show);

// POST /skills (create new skill)
router.post('/', skillsCtrl.create);

// DELETE /skills/:id (delete a skill)
router.delete('/:id', skillsCtrl.delete);

// GET /skills/:id/edit (display edit skill form)
router.get('/:id/edit', skillsCtrl.edit);

// PUT /skills/:id (update a skill)
router.put('/:id', skillsCtrl.update);

module.exports = router;
