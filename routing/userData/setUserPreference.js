var express = require('express');
var router = express.Router();
var User = require('../../database/models/User').User;

router.post('/', function(req, res) {
	var user = req.body.user;
	var preference = req.body.preference;
	var queryString = {};
	queryString.name = user;
	User.update(queryString, {name: user, preference: JSON.stringify(preference)}).exec(function(err) {
		if(err) {
			res.send({result: false});
		} else {
			res.send({result: true});
		}
	});
});

exports.router = router;