const router = require("express").Router();
let Day = require("../models/days.model");

//** Get All Day **//
router.route("/get-day/:projectNr").post((req, res) => {
  Day.find({ projectNr: req.params.projectNr })
    .then((project) => res.json(project))
    .catch((err) => res.status(400).json("Error : " + err));
});

//** Add Day Details **//
router.post("/add", async (req, res) => {
  console.log("day added");
  let {
    projectNr,
    date,
    timeFrom,
    timeUntil,
    weather,
    workers,
    temperature,
    workProgress,
    workPlaning,
    safety,
  } = req.body;

  const newDate = new Day({
    projectNr,
    date,
    timeFrom,
    timeUntil,
    weather,
    workers,
    temperature,
    workProgress,
    workPlaning,
    safety,
  });

   const date_available = await Day.findOne({
    projectNr: projectNr,
    date: date,
  });

  if (!date_available) {
    const savedDay = await newDate.save();
    res.json({ msg: "New Day added!" });
  } else {
    res.status(200).json({ msg: "Date Already exists" });
  }
});

//** Delete Day Details **//
router.route("/:id").delete((req, res) => {
  Day.findByIdAndDelete(req.params.id)
    .then(() => res.json("Day deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});


module.exports = router;




