var express = require('express');
var Restaurant = require('../database/models/Restaurant').Restaurant;
var router = express.Router();
var getUserPreference = require('./userData/getUserPreference');

function computeScoreFactory(preference) {
  function computeScore(restaurant) {
    let basescore = preference.service * restaurant.service + preference.taste * restaurant.taste + preference.env * restaurant.env;
    if(restaurant.category in preference.category) basescore *= 1.2;
    return basescore;
  }
  return computeScore;
}
router.get('/:city', function(req, res) {
  //Obtain post data
  var city = req.params.city;
  var longitude = req.body.longitude;
  var latitude = req.body.latitude;
  var user = req.body.user;
  //Obtain user preference data
  var preference = getUserPreference(user);
  //Limit the number of restaurants returned
  var limit = 5;
  //Indexed search on 2d sphere
  Restaurant.ensureIndexes({'location':'2dsphere'});
  //compute score function
  var computeScore = computeScoreFactory(preference);
  //Build query string
  var queryString = {};
  queryString.city = city;
  queryString.location = {$near: [longitude, latitude], $maxDistance: preference.distance/111};
  queryString.price = {$lt: preference.price*1.15}; //Accept 15% over price

  Restaurant.find(queryString).limit(limit).exec(function(err, restaurants) {
    if(err) res.send('Fail');
    else {
      restaurants.forEach(function(restaurant) {
        restaurant.score = computeScore(restaurant);
      });
      restaurants.sort((restaurantA, restaurantB) => {return restaurantB.score - restaurantA.score;});
      res.send(restaurants);
    }
  });
});

exports.router = router;
