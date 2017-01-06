var express = require('express');
var router = express.Router();
var Service = require('../models/service');



router.get('/', function(req, res, next) {
	Service.find(function(err, docs) {
		res.render('band', { items: docs,
		sampleTitle: ""});
	});

});

module.exports = router;