var express = require('express');
var router = express.Router();
// Require the User model
var Dog = require('../models/dog');

/* GET home page. */
router.get('/', function(req, res, next) {
  
  res.render('index', { title: 'Express' });
});

module.exports = router;
