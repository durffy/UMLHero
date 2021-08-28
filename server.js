// Requirement imports
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const express = require('express');
const path = require('path');

const routes = require('./routes');
const { getProjects } = require('./src/controller/projectController');

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/UMLHero', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

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
    return next();
  } catch (err) {
    return next(err);
  }
});

app.use(express.urlencoded({ extended: true }));

// Routes implementation. Helps route requests to other routes
app.use(
  '/',
  // add additional services here
  routes('./views/projects')
);
