var express = require('express');
var router = express.Router();
var User = require('../../database/models/User').User;

router.post('/', function(req, res) {
	var user = req.body.user;
	var queryString = {};
	queryString.name = user;
	User.find(queryString).exec(function(err, users) {
		if(users.length>0) {
			res.send({result: true});
		} else {
			res.send({result: false});
		}
	});
});

exports.router = router;