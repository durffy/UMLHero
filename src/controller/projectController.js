/* eslint-disable import/prefer-default-export */

const mongoose = require('mongoose');
const projectModel = require('../model/projectModel');

const { ProjectSchema } = require('../model/projectModel');

const Project = mongoose.model('projects', ProjectSchema);

class ProjectModel {
  constructor() {
    this.Project = Project;
  }

  async addNewProject(params) {
    const newProject = new Project(params);
    newProject.save();
  }

  async getProjects() {
    const data = await this.Project.find().lean().exec();
    return data;
  }

  async getById(params) {
    const { id } = params;
    const data = await Project.findById(id).exec();
    return data;
  }
}

module.exports = ProjectModel;
