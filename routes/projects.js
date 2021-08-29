const express = require('express');
const ProjectModel = require('../src/controller/projectController');
const router = express.Router();
const controller = new ProjectModel();

module.exports = (params) => {
  const { projectService } = params;

  // CREATE

  router.post('/', async (request, response) => {
    console.log(request.body);
    controller.addNewProject(request.body);
    return response.redirect('/projects');
  });

  // READ
  router.get('/create-project', (request, response) => {
    return response.render('pages/create-project', {
      pageTitle: 'Create Project',
    });
  });

  router.get('/', async (request, response) => {
    const projects = await controller.getProjects();
    return response.render('pages/projects', {
      pageTitle: 'Project List',
      projects,
    });
  });

  router.get('/:id', async (request, response) => {
    const project = await controller.getById(request.params);
    response.render('pages/project-detail', {
      pageTitle: request.params.name,
      project,
    });
  });

  // UPDATE
  router.put('/:id', async (request, response) => {
    return response.send(`${request.body}`);
  });

  router.delete('/:id', async (request, response) => {
    await controller.deleteById(request.params);
    return response.redirect('/projects');
  });

  return router;
};
