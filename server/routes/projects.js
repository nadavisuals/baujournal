const router = require('express').Router();
let Project = require('../models/projects.model');

//**Show all Projects**//
router.route('/').get((req, res) => {
  Project.find()
    .then(projects => res.json(projects))
    .catch(err => res.status(400).json('Error: ' + err));
});

//**Add Projects**//
router.post("/add", async (req, res) => {
  let { projectNr, projectTitle } = req.body;

  const projectNr_available = await Project.findOne({ projectNr: projectNr });
  if (!projectNr_available) {
    const newProject = new Project({ projectNr, projectTitle });

    const savedProject = await newProject.save();
    res.json({ msg: "Projekt erstellt!" });
  } else {
    res.status(200).json({ msg: "Projekt Nr. bereits vorhanden!" });
  } 
});


//**Delete Projects**//
router.route("/:id").delete((req, res) => {
  Project.findByIdAndDelete(req.params.id)
    .then(() => res.json("Project deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

//**Get Project by ID**//
router.route('/:id').get((req, res) => {
  Project.findById(req.params.id)
    .then(project => res.json(project))
    .catch(err => res.status(400).json('Error: ' + err));
});

//**Delete Project by ID**//
router.route('/:id').delete((req, res) => {
  Project.findByIdAndDelete(req.params.id)
    .then(() => res.json('Project deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

//**Update Project by ID**//
router.route('/update/:id').post((req, res) => {
  Project.findById(req.params.id)
    .then(project => {
        project.projectNr = Number(req.body.projectNr);
        project.projectTitle = req.body.projectTitle;
        project.save()
        .then(() => res.json('Project updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;