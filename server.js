//Key modules
const express = require('express');
const db = require('./database/connector').mongoose;
const server = express();
var bodyParser = require('body-parser');

//Config
server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({limit:'500mb'}));

//Routing
const topChoice = require('./routing/topChoice').router;
server.use('/topChoice', topChoice);

server.listen(3000, function() {
  console.log('listening on 3000')
});
