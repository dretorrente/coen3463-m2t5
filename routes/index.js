var express = require('express');
var router = express.Router();
var Service = require('../models/service');

/* GET home page. */
router.get('/', function(req, res, next) {
	Service.find(function(err, docs) {
		res.render('index', {
			title: 'Home',
			"items": docs
		});
	});
});

router.get('/band', function(req, res, next) {
	Service.find(function(err, docs) {
		res.render('services', {
			title: 'Services',
			"servName": docs[0].title,
			"items": docs
		});
	});
});
//router.get('/band', function(req, res, next) {
//	res.render('services', {
//		title : 'Services',
//		servName : 'band'
//	});
//});

router.get('/dj', function(req, res, next) {
	Service.find(function(err, docs) {
		res.render('services', {
			title: 'Services',
			"servName": docs[1].title,
			"items": docs

		});
	});
});

router.get('/production', function(req, res, next) {
	Service.find(function(err, docs) {
		res.render('services', {title: 'Services',
			"servName": docs[2].title,
			"items": docs

	});
	});
});



module.exports = router;
