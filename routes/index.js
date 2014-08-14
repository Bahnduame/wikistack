var express = require('express');
var router = express.Router();
//var mongoose=require('mongoose');
var models = require('../models');

// console.log(models);

/* GET home page. */
router.get('/', function(req, res) {
    // var doc = req.params.
    // var docs = models.Page.find();
    models.Page.find(function(err, docs){
        res.render('index', { title: 'Express', docs: docs});
    })

});

module.exports = router;
