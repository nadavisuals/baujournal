const router = require('express').Router();
let Project = require('../models/projects.model');

router.route('/').get((req, res) => {
  Project.find()
    .then(projects => res.json(projects))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const projectNr = req.body.projectNr;
  const projectTitle = req.body.projectTitle;

  const newProject = new Project({
        projectNr,
        projectTitle
    });

  newProject.save()
    .then(() => res.json('Project added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;