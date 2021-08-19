// Requirement imports
const cookieSession = require('cookie-session');
const express = require('express');
const path = require('path');
const routes = require('./routes');
const ProjectService = require('./services/ProjectService');
const bodyParser = require('body-parser');

// setup the project services
const projectService = new ProjectService('./data/project.json');

// setup for server listening port
const port = 3000;
const app = express();

app.use(
  cookieSession({
    name: 'sesssion',
    keys: ['Gajisdfoookll', 'ahsdfomviiiiiAA'],
  })
);

app.listen(port, () => {
  console.log(`Express Server listening on port: ${port}!`);
});

// View Engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));
app.use(express.static(path.join(__dirname, './static')));

// middleware functions and variables for global site template usage
app.locals.siteName = 'UML Hero';
app.use(async (request, response, next) => {
  try {
    const names = await projectService.getData();
    response.locals.projectNames = names;
    return next();
  } catch (err) {
    return next(err);
  }
});

app.use(bodyParser.urlencoded({ extended: true }));

// Routes implementation
app.use(
  '/',
  // add additional services here
  routes({
    projectService,
  })
);
