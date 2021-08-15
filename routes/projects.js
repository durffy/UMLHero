const express = require('express');

const router = express.Router();

module.exports = (params) => {
  const { projectService } = params;

  router.get('/', async (request, response) => {
    const projects = await projectService.getList();

    return response.render('pages/projects', {
      pageTitle: 'projects',
      // todo: projects show up as object object, needs to be each project name and date
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
