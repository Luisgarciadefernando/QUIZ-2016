var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Quiz' });
  //res.render('index', { footer: 'https://github.com/Luisgarciadefernando/QUIZ-2016.git' });

});

module.exports = router;
