const express = require('express');

const router = express.Router();

module.exports = (params) => {
  const { projectService } = params;

  router.get('/', async (request, response) => {
    const projects = await projectService.getList();

    return response.render('pages/projects', {
      pageTitle: 'projects',
    });
  });

  return router;
};
