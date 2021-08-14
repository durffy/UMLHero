const express = require('express');

const router = express.Router();
// add additional requirements here e.g. requirements, uml, user stories
const projectsRoute = require('./projects');

module.exports = (params) => {
  router.get('/', (request, response) => {
    response.render('pages/index', { pageTitle: 'Welcome' });
  });

  // add additional routes here e.g. requirements, uml, user stories
  router.use('/projects', projectsRoute(params));

  return router;
};
