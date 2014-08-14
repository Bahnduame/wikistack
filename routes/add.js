var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('add');
});

router.post('/submit', function(req, res) {
  // this is the /add/submit route
});

module.exports = router;
