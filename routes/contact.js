var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');


router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact Us', sent: '' });
});

router.post('/', function(req, res, next) {
	var transporter = nodemailer.createTransport({
		service : 'Gmail',
		auth : {
			user : 'ironman.programmer@gmail.com',
			pass : 'iamironman'
		}
	});

	var mailOptions = {
		from : req.body.name +' <'+req.body.email+'>',
		to : 'ironman.programmer@gmail.com',
		subject : 'Website Message Submission',
		text : 'Received new inquiry with the following details. Name: ' +req.body.name+ '\nEmail: ' +req.body.email+ '\nEvent: ' +req.body.event+ '\nMessage: ' +req.body.message,
		html : '<p>Received new inquiry with the following details. </p><ul><li>Name: '+req.body.name+'</li><li>Email: '+req.body.email+'<li>Event: '+req.body.event+'</li></li><li>Message: '+req.body.message+'</li></ul>'
	};

	transporter.sendMail(mailOptions, function(error, info) {
		if(error){
			console.log(error);
			res.render('contact', {title: 'Contact Us', sent: 'no'});
		} else {
			console.log('Message Sent: '+info.response);
			res.render('contact', {title: 'Contact Us', sent: 'yes'});
		}
	});
});

module.exports = router;