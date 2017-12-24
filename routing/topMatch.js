var express = require('express');
var Restaurant = require('../database/models/Restaurant').Restaurant;
var router = express.Router();

router.get('/:city', function(req, res) {
  var city = req.params.city;
  var longitude = req.body.longitude;
  var latitude = req.body.latitude;
  var user = req.body.user;
  var limit = 5;
  Restaurant.ensureIndexes({'location':'2dsphere'});
  //Restaurant.ensureIndex({'location':'2dsphere'})
  Restaurant.find( {city: city, location:{$near: [longitude, latitude], $maxDistance:10}}).limit(limit).exec(function(err, restaurants) {
    console.log(limit);
    if(err) res.send('Fail');
    else res.send(restaurants);
  });
});

exports.router = router;
