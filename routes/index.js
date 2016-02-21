var express = require('express');
var router = express.Router();
var questionSet = require('../bin/test_tree.js');
var passport = require('../config/passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/questions', function(req, res){
  res.json(questionSet);
});

router.post('/signup', passport.authenticate('local-signup', {
  successRedirect: '/profile',
  failureRedirect: '/signup',
  failureFlash: true
}));

router.post('/login', passport.authenticate('local-login', {
  successRedirect : '/profile', // redirect to the secure profile section
  failureRedirect : '/login', // redirect back to the signup page if there is an error
  failureFlash : true // allow flash messages
}));

router.get('/login', function(req, res) {
  // render the page and pass in any flash data if it exists
  res.render('login.ejs'); 
});

router.get('/signup', function(req, res) {
  // render the page and pass in any flash data if it exists
  res.render('signup.ejs');
});   

router.get('/profile', isLoggedIn, function(req, res) {
  res.render('profile.ejs', {
      user : req.user // get the user out of session and pass to template
  });
});


module.exports = router;

function isLoggedIn(req, res, next) {
    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();
    // if they aren't redirect them to the home page
    res.redirect('/');
}
