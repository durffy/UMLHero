const express = require('express');

const router = express.Router();

module.exports = (params) => {
  const { projectService } = params;

  router.get('/', async (request, response) => {
    const projects = await projectService.getList();

    return response.render('pages/projects', {
      pageTitle: 'projects',
      projects,
    });
  });

  router.get('/:name', async (request, response) => {
    const project = await projectService.getProject(request.params.name);
    response.render('pages/project-detail', {
      pageTitle: request.params.name,
      project,
    });
  });
  return router;
};
