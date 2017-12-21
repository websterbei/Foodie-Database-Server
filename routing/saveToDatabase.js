var express = require('express');
var Restaurant = require('../database/models/Restaurant').Restaurant;
var router = express.Router();

router.get('/', function(req, res) {
  var city = req.params.city;
  var newEntry = new Restaurant(req.body);
  newEntry.save(function(err) {
    if(err) res.send('Failed');
    else res.send('Success');
  });
});

exports.router = router;
