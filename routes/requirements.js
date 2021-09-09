const express = require('express');

const router = express.Router();

module.exports = (params) => {
  const { requirementsService } = params;

  // CREATE
  router.post('/', async (request, response) => {
    console.log(request.body);
  });

  // READ
  router.get('/', async (request, response) => {
    console.log(request.project);
    return response.render('pages/requirements', {
      pageTitle: 'Requirements List',
      project: request.project,
    });
  });

  return router;
};
