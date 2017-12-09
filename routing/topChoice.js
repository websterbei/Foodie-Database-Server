var express = require('express');
var Restaurant = require('./database/models/Restaurant').Restaurant;
var router = express.Router();

router.get('/:city', function(req, res) {
  var city = req.params.city;
  var start = req.body.start; // starting index of the restaurant
  var end = req.body.end; // ending index of the restaurant
  Restaurant.find({_id:{$gte: start, $lte: end}}, function(err, restaurants) {
    if(err) res.send('Fail');
    else res.send(restaurants);
  });
});

exports.router = router;