var express = require('express');
var router = express.Router();
// Require the Dog model
var Dog = require('../models/dog');

/* GET home page. */
router.get('/', function(req, res, next) {
 
	Dog.find({},'name', function(err, dogs) {
		if (err) console.log(err);
		console.log(dogs);
		res.render('index', {
			dogs: dogs 
		});
	});
});

module.exports = router;
