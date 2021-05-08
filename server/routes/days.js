const router = require("express").Router();
let Day = require("../models/days.model");

//** Get All Day **//
router.route("/get-day/:projectNr").post((req, res) => {
  Day.find({ projectNr: req.params.projectNr })
    .then((project) => res.json(project))
    .catch((err) => res.status(400).json("Error : " + err));
});


module.exports = router;
