var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Quiz' });
  //solo un res.render//res.render('index', { title: 'Quiz', url: 'https://github.com/Luisgarciadefernando/QUIZ-2016.git' });
});
/* GET author page. */
router.get('/author', function(req, res, next) {
res.render('author', { url: 'https://github.com/Luisgarciadefernando/QUIZ-2016.git', author: 'Luis García de Fernando' });
});
module.exports = router;
