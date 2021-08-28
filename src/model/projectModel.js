/* eslint-disable import/prefer-default-export */
const mongoose = require('mongoose');

const { Schema } = mongoose;

const ProjectSchema = new Schema({
  name: {
    type: String,
    required: 'enter a name for the project',
  },
  description: {
    type: String,
    required: 'enter a description for the project',
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
  LastUpdated: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('projects', ProjectSchema);
