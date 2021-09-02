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

  async updateById(request) {
    const { name, description } = request.body;
    const { id } = request.params;
    const query = { _id: request.params.id };
    const options = { new: true };
    const update = { name: name, description: description, lastUpdated: Date.now() };
    let result = await this.Project.findByIdAndUpdate(query, { $set: update }, options);
  }

  async deleteById(params) {
    const { id } = params;
    await Project.findByIdAndDelete(id).exec();
  }
}

module.exports = ProjectModel;
