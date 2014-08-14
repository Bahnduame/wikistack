var express = require('express');
var router = express.Router();
var models = require('../models/');

router.post('/:page_url/complete', function(req,res) {
    var page_url = req.params.page_url;
    var page_body = req.body.page_body;
    models.Page.findOneAndUpdate({url_name: page_url}, {body: page_body},
      function (err,page1) {
        res.redirect('../../wiki/'+page_url);
    });
});

module.exports = router;