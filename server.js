// Requirement imports
const express = require('express');
const path = require('path');
const routes = require('./routes');

// setup for server listening port
const port = 3000;
const app = express();

app.listen(port, () => {
  console.log(`Express Server listening on port: ${port}!`);
});

// View Engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));
app.use(express.static(path.join(__dirname, './static')));

// Routes implementation
app.use('/', routes());
