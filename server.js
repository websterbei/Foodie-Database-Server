//Key modules
const express = require('express');
const db = require('./database/connector').mongoose;
const server = express();
var bodyParser = require('body-parser');
var fs = require('fs');
var https = require('https');

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
var credentials = {
    ca: fs.readFileSync('../../wecode/ssl/tan90_tech.ca-bundle'),
    key: fs.readFileSync('../../wecode/ssl/webster.key'),
    cert: fs.readFileSync('../../wecode/ssl/tan90_tech.crt')
};

var httpsServer = https.createServer(credentials, server);

httpsServer.listen(443, function() {
  console.log("HTTPS server listening on port " + port);
});
