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

module.exports = {
  getAll,
  getOne
};

function getAll() {
  return skills;
}

function getOne(id) {
  return skills.find(skill => skill.id == id);
}