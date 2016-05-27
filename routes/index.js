var express = require('express');
var router = express.Router();
var quizController = require('../controllers/quiz_controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { url: 'https://github.com/Luisgarciadefernando/QUIZ-2016.git',title: 'Quiz' });
  //solo un res.render//res.render('index', { title: 'Quiz', url: 'https://github.com/Luisgarciadefernando/QUIZ-2016.git' });
});
/* GET author page. */
router.get('/author', function(req, res, next) {
res.render('author', { url: 'https://github.com/Luisgarciadefernando/QUIZ-2016.git', author: 'Luis García de Fernando' });
});

/* GET question */

/* GET check */
router.get('/quizes.:format?', quizController.index);
router.get('/quizes/:quizId(\\d+).:format?', quizController.show);
router.get('/quizes/:quizId(\\d+)/check', quizController.check);

module.exports = router;
