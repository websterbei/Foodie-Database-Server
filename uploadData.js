//Key modules
const express = require('express');

//Routing
const app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json({limit:'500mb'}));
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/restaurants', {useMongoClient: true});

var restaurantSchema = new Schema({
  _id: String,
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

app.get('/save', function(req, res) {
  //res.send("Hello");
  var newEntry = new Restaurant(req.body);
  newEntry.save((err, data) => {
    if(err) res.send('Failed');
    else res.send('Success');
  });
});


server.listen(3000, function() {
  console.log('listening on 3000')
});
