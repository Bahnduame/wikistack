var express = require('express');
var router = express.Router();
var models = require('../models/');

router.get('/', function(req, res) {
    res.render('add');
});

router.post('/submit', function(req, res) {
    var generateUrlName = function(name) {
      if (typeof name != "undefined" && name !== "") {
        // Removes all non-alphanumeric characters from name
        // And make spaces underscore
        return name.replace(/\s{1,}/ig,"_").replace(/[^\w]/ig,"");
      } else {
        // Generates random 5 letter string
        return Math.random().toString(36).substring(2,7);
      }
    };
  // STUDENT ASSIGNMENT:
  // add definitions of the `title`, `body` and `url_name` variables here
    var title = req.body.page_title;
    var body = req.body.page_body;
    var url_name = generateUrlName(title);
    console.log("title :"+title+", body :"+body+", url_name :"+url_name);

    var p = new models.Page({ "title": title, "body":body, "url_name": url_name});
    p.save();
    res.redirect('/');
});


module.exports = router;
