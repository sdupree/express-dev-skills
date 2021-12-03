// controllers/skills.js

const Skill = require('../models/skill');

module.exports = {
  index,
  show
};

function index(req, res) {
  let skills = Skill.getAll();
  res.render('skills/index', { skills });
}

function show(req, res) {
  res.render('skills/show', {
    skill: Skill.getOne(req.params.id)
  });
}
