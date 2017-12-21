var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var restaurantSchema = new Schema({
  _id: {type: Number, index: true},
  name: String,
  address: String,
  category: String,
  taste: Number,
  service: Number,
  env: Number,
  img: String,
  price: Number,
  city: {type: String, index: true},
  location: {type: [Number], index: '2dsphere'},
});

var Restaurant = mongoose.model('Restaurant', restaurantSchema);

exports.Restaurant = Restaurant;
