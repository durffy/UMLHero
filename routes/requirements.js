const express = require('express');

const router = express.Router();

module.exports = (params) => {
  const { requirementsService } = params;

  // CREATE
  router.post('/', async (request, response) => {
    console.log(request.body);
  });

  // READ

  router.get('/create-requirement', async (request, response) => {
    return response.render('pages/create-requirement', {
      pageTitle: 'Create Requirement',
      project: request.project,
    });
  });

  router.get('/', async (request, response) => {
    return response.render('pages/requirements', {
      pageTitle: 'Requirements List',
      project: request.project,
    });
  });

  return router;
};
