const router = require("express").Router();
let Day = require("../models/days.model");

//** Get All Day **//
router.route('/').get((req, res) => {
  Day.find()
    .then(project => res.json(project))
    .catch(err => res.status(400).json("Error: " + err));
});

//** Get All Days from ProjectNr **//
   router.route("/get-days/:projectNr").post((req, res) => {
    Day.find({ projectNr: req.params.projectNr })
      .sort({ date: -1 })
      .then((project) => res.json(project))
      .catch((err) => res.status(400).json("Error : " + err));
  });

//** Add Day Details **//
router.post("/add", async (req, res) => {
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
    res.status(200).json({ msg: "Dieses Datum ist bereits vorhanden!" });
  }
});

//** Delete Day Details **//
router.route("/:id").delete((req, res) => {
  Day.findByIdAndDelete(req.params.id)
    .then(() => res.json("Day deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

//** Get Day Details by id **//
router.route("/get-day-detail/:id").get((req, res) => {
  Day.find({ _id: req.params.id })
    .then((project) => res.json(project))
    .catch((err) => res.status(400).json("Error : " + err));
});


//** Update Day **//
router.route("/update/:id").post((req, res) => {
  Day.findById(req.params.id)
    .then((day) => {
      day.projectNr = req.body.projectNr;
      day.date = req.body.date;
      day.timeFrom = req.body.timeFrom;
      day.timeUntil = req.body.timeUntil;
      day.weather = req.body.weather;
      day.workers = req.body.workers;
      day.temperature = req.body.temperature;
      day.workProgress = req.body.workProgress;
      day.workPlaning = req.body.workPlaning;
      day.safety = req.body.safety;

      day
        .save()
        .then(() => res.json("Day updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;