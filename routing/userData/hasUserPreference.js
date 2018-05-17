var express = require('express');
var router = express.Router();
var Restaurant = require('../database/models/User').User;

router.post('/', function(req, res) {
	var user = req.body.user;
	var queryString = {};
	queryString.name = user;
	User.find(queryString).exec(function(err, users) {
		if(users) {
			res.send({result: true});
		} else {
			res.send({result: false});
		}
	});
});