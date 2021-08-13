const express = require('express');

const router = express.Router();
const projectsRoute = require('./projects');

module.exports = (params) => {
  router.get('/', (request, response) => {
    response.render('pages/index', { pageTitle: 'Welcome' });
  });

  router.use('/projects', projectsRoute(params));

  return router;
};
