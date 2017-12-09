var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/restaurants', {useMongoClient: true});

exports.mongoose = mongoose;
