const express = require('express');
const { getProjects, addNewProject } = require('../src/controller/projectController');
const router = express.Router();

module.exports = (params) => {
  const { projectService } = params;

  router.get('/', async (request, response) => {
    // eslint-disable-next-line prefer-arrow-callback
    getProjects(function (projects) {
      return response.render('pages/projects', {
        pageTitle: 'Project List',
        projects,
      });
    });
  });

  router.get('/create-project', (request, response) => {
    return response.render('pages/create-project', {
      pageTitle: 'Create Project',
    });
  });

  router.get('/:name', async (request, response) => {
    const project = await projectService.getProject(request.params.name);
    response.render('pages/project-detail', {
      pageTitle: request.params.name,
      project,
    });
  });

  // takes input from the create-project form and adds the entry to the data/project.json
  router.post('/', async (request, response) => {
    addNewProject(request, response);
    return response.redirect('projects');
  });

  router.put('/update-project', async (request, response) => {
    const { id, name, description } = request.body;
    await projectService.updateProject(id, name, description);
    return response.send(`${request.body}`);
  });

  return router;
};
