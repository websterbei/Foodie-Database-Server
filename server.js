//Key modules
const express = require('express');
const db = require('./database/connector').mongoose;
const server = express();
var bodyParser = require('body-parser');

//Config
server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({limit:'500mb'}));

//Routing
const saveToDatabase = require('./routing/saveToDatabase').router;
server.use('/saveToDatabase', saveToDatabase);

const aroundMe = require('./routing/aroundMe').router;
server.use('/aroundMe', aroundMe);

const topMatch = require('./routing/topMatch').router;
server.use('/topMatch', topMatch);

const hasUserPreference = require('./routing/userData/hasUserPreference').router;
server.use('/hasUserPreference', hasUserPreference);

const setUserPreference = require('./routing/userData/setUserPreference').router;
server.use('/setUserPreference', setUserPreference);

//Running server
server.listen(3000, function() {
  console.log('listening on 3000')
});
