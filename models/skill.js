const skills = [
  {id: 0, name: 'PHP', type: 'Language', years: 16},
  {id: 1, name: 'Perl', type: 'Language', years: 24},
  {id: 2, name: 'BASIC', type: 'Language', years: 28},
  {id: 3, name: 'LOGO', type: 'Language', years: 35},
  {id: 4, name: 'Windows', type: 'Operating System', years: 30},
  {id: 5, name: 'Linux', type: 'Operating System', years: 27},
  {id: 6, name: 'MacOS', type: 'Operating System', years: 18},
  {id: 7, name: 'Adobe Illustrator', type: 'Application', years: 4},
  {id: 8, name: 'Adobe Photoshop', type: 'Application', years: 25}
];

const skillTypes = [
  'Language',
  'Framework',
  'Operating System',
  'Application',
  'Device',
  'Video Game'
];

module.exports = {
  getSkillTypes,
  getAll,
  getOne,
  create,
  deleteOne,
  update
};

function getSkillTypes() {
  return skillTypes;
}

function getAll() {
  return skills;
}

function getOne(id) {
  return skills.find(skill => skill.id == id);
}

function create(skillObj) {
  console.log(skillObj);
  // Find highest ID in database, then add 1.
  var len = skills.length, max = -Infinity;
  while (len--) {
    if (skills[len].id > max) {
      max = skills[len].id;
    }
  }

  skillObj.id = ++max;

  skills.push(skillObj);
}

function deleteOne(id) {
  // Find the index in the database.
  const idx = skills.findIndex(skill => skill.id === id);
  // Delete it.
  skills.splice(idx, 1);
}

function update(skillObj) {
  // Find the index in the database.
  const idx = skills.findIndex(skill => skill.id === skillObj.id);
  // Only update explicitly specified properties.
  skills[idx].name = skillObj.name;
  skills[idx].type = skillObj.type;
  skills[idx].years = skillObj.years;
}