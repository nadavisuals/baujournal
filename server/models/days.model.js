const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const daySchema = new Schema(
  {
    projectNr: { type: String, required: true },
    date: { type: String },
    timeFrom: { type: String },
    timeUntil: { type: String },
    weather: { type: String },
    workers: { type: String },
    temperature: { type: String },
    workProgress: { type: String },
    workPlaning: { type: String },
    safety: { type: String },
  },
  {
    timestamps: true,
  }
);

const Day = mongoose.model("Day", daySchema);

module.exports = Day;
