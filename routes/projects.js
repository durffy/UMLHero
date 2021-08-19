const express = require('express');

const router = express.Router();

module.exports = (params) => {
  const { projectService } = params;

  router.get('/', async (request, response) => {
    const projects = await projectService.getList();

    return response.render('pages/projects', {
      pageTitle: 'Project List',
      projects,
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
    console.log(request.body);
    const { name, description } = request.body;
    await projectService.addEntry(name, description);

    return response.redirect('projects');
  });

  router.put('/', async (request, response) => {
    console.log(request.body);
    await projectService.updateEntry(request.params.id);

    return response.redirect('projects');
  });

  return router;
};
