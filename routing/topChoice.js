var express = require('express');
var Restaurant = require('../database/models/Restaurant').Restaurant;
var router = express.Router();

router.get('/:city', function(req, res) {
  var city = req.params.city;
  var longitude = req.body.longitude;
  var latitude = req.body.latitude;
  var distance = req.body.distance;
  var limit = 5;
  //Restaurant.ensureIndex({'location':'2dsphere'})
  Restaurant.find( {'coordinate':{$near: [longitude, latitude], $maxDistance:distance}}, function(err, restaurants) {
    if(err) res.send('Fail');
    else res.send(restaurants);
  }).limit(limit);
});

exports.router = router;
