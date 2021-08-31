const express = require('express');

const router = express.Router();

module.exports = (params) => {
  const { requirementsService } = params;

  router.get('/', async (request, response) => {
    const requirements = await requirementsService.getRequirements();

    return response.render('pages/requirements', {
      pageTitle: 'Requirements List',
      requirements,
    });
  });

  router.post('/', async (request, response) => {
    console.log(request.body);
    const { name, description } = request.body;
    await projectService.addProject(name, description);

    return response.redirect('projects');
  });
};
