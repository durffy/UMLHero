/* eslint-disable import/prefer-default-export */

const mongoose = require('mongoose');
const projectModel = require('../model/projectModel');

const { ProjectSchema } = require('../model/projectModel');

const Project = mongoose.model('projects', ProjectSchema);

module.exports.getProjects = function (callback) {
  // we will pass a function :)
  Project.find()
    .lean()
    .exec(function (err, docs) {
      callback(docs); // <-- call the function passed as parameter
    });
};

module.exports.addNewProject = (request, response) => {
  const newProject = new Project(request.body);
  newProject.save();
};
