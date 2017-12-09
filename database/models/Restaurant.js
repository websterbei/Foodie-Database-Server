var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var restaurantSchema = new Schema({
  _id: Number,
  name:  String,
  address: String,
  category:   String,
  taste: Number,
  service: Number,
  env: Number,
  img: String,
  price: Number
});

var Restaurant = mongoose.model('Restaurant', restaurantSchema);

exports.Restaurant = Restaurant;
