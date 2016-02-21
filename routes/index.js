var express = require('express');
var router = express.Router();
var questionSet = require('../bin/test_tree.js');
var passport = require('../config/passport');
var descriptions = require('../bin/description.js');
var App = require('../models/apps.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/questions', function(req, res){
  res.json(questionSet);
});

router.get('/descriptions', function(req, res){
  res.json(descirptions);
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

router.post('/newapp', function(req, res){
  var app = new App();
  app.user = req.user._id;
  app.modules = req.body.answers;
  app.save();
});

router.get('/apps', function(req,res){
  App.find({user: req.user._id}, function(apps){
    res.json(apps);
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
