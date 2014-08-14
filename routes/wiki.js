var express = require('express');
var router = express.Router();
//var mongoose=require('mongoose');
var models = require('../models');

router.get('/:page_url',function(req,res){
    var page_url = req.params.page_url;
    // console.log(page_url);
    models.Page.findOne({url_name : page_url}, function (err, page1) {
        res.render('show', {page: page1})
    })

   // res.render('index', { title: 'Express'});
});

router.get('/:page_url/delete', function(req,res) {
    var page_url = req.params.page_url;
    models.Page.remove({url_name: page_url}, function (err, page1) {
        res.redirect('/');
    })
});

router.get('/:page_url/edit', function(req,res) {
    var page_url = req.params.page_url;
    models.Page.findOne({url_name: page_url}, function (err, page1) {
        res.render('edit', {page: page1});
    })
});

module.exports = router;