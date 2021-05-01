const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const projectSchema = new Schema({
  projectNr: { type: Number, required: true },
  projectTitle: { type: String, required: true },
  }, {
  timestamps: true,
});

const Project = mongoose.model('Projects', projectSchema);

module.exports = Project;