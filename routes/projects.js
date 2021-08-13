const { response } = require('express');
const express = require('express');

const router = express.Router();

module.exports = () => {
  router.get('/', (request, response) => {
    response.render('pages/projects', {
      pageTitle: 'Projects',
      projects: 'ProjectListItem',
    });
  });

  return router;
};
