// controllers/skills.js

const Skill = require('../models/skill');

module.exports = {
  index,
  show,
  new: newSkill,
  create,
  delete: deleteSkill,
  edit,
  update
};

function index(req, res) {
  res.render('skills/index', { skills: Skill.getAll() });
}

function show(req, res) {
  res.render('skills/show', { skill: Skill.getOne(req.params.id) });
}

function newSkill(req, res) {
  res.render('skills/new');
}

function create(req, res) {
  Skill.create(req.body);
  res.redirect('/skills');
}

function deleteSkill(req, res) {
  Skill.deleteOne(parseInt(req.params.id));
  res.redirect('/skills');
}

function edit(req, res) {
  res.render('skills/edit', { skill: Skill.getOne(req.params.id) });
}

function update(req, res) {
  Skill.update({
    // Sanitize our data before we move on.
    name: req.body.name,
    type: req.body.type,
    years: req.body.years,
    id: parseInt(req.params.id)
  });
  res.redirect('/skills');
}

