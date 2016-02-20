var express = require('express');
var router = express.Router();
var questionSet = require('../bin/test_tree.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/questions', function(req, res){
  res.json(questionSet);
});


module.exports = router;
