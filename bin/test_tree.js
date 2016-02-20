
var Question = function(q, a1, a2){
  this.question = q;
  this.left = null;
  this.right = null;
  this.la = a1;
  this.ra = a2;

  Question.prototype.addLeft = function(question){
    this.left = question;
  }

  Question.prototype.addRight = function(question){
    this.right = question;
  }
}

var answers =[];
var questionSet = [];

var root = new Question("Do you need a DB?", "yes", "no");
var q1 = new Question("Do you want to host your own DB?", "yes", "no");
var q2 = new Question("Do you prefer speed or reliability?", "speed", "reliability");
root.addLeft(q1);
root.addRight(["n/a"]);
q1.addLeft(q2);
q1.addRight(["Firebase"]);
q2.addRight(["PostgreSQL", "sequelize"]);
q2.addLeft(["MongoDB", "mongoose"]);
questionSet.push(root);

var root = new Question("Do you want a task runner?", "yes", "no");
var q1 = new Question("Would you prefer to write it in javascript or as configuration file", "javascript", "configuration");
root.addLeft(q1);
root.addRight(["n/a"]);
q1.addLeft(["Gulp"]);
q1.addRight(["Grunt"]);
questionSet.push(root);

var root = new Question("Do you want to use a Front end framework?", "yes", "no");
var q1 = new Question("Are you a hipster?", "yes", "no");
var q2 = new Question("Do you want an opinionated framework?", "yes", "no")
root.addLeft(q1);
root.addRight(["n/a"]);
q1.addLeft(["React"]);
q1.addRight(q2);
q2.addLeft(["Angular"]);
q2.addRight(["Mithril"]);
questionSet.push(root);

var root = new Question("Do you want to use a css framework?", "yes", "no");
var q1 = new Question("Do you want to look like google?", "yes", "no");
var q2 = new Question("Do you want to look like everyone else?", "yes", "no");
root.addLeft(q1);
root.addRight(["n/a"]);
q1.addLeft(["Material"]);
q1.addRight(q2);
q2.addLeft(["Bootstrap"]);
q2.addRight(["Semantic UI"]);
questionSet.push(root);

var root = new Question("Do you want user authentication?", "yes", "no");
root.addLeft(["passport.js"]);
root.addRight(["n/a"]);
questionSet.push(root);

var root = new Question("Do you want sessions?", "yes", "no");
root.addLeft(["express-sessions"]);
root.addRight(["n/a"]);
questionSet.push(root);

var root = new Question("Do you want cookies?", "yes", "no");
root.addLeft(["cookie-parser"]);
root.addRight(["n/a"]);
questionSet.push(root);

var root = new Question("Do you want to be able to process forms?", "yes", "no");
root.addLeft(["body-parser"]);
root.addRight(["n/a"]);
questionSet.push(root);

var root = new Question("Do you want functional programming?", "yes", "no");
root.addLeft(["underscorejs"]);
root.addRight(["n/a"]);
questionSet.push(root);

var root = new Question("Do you want to secure your app?", "yes", "no");
root.addLeft(["helmet"]);
root.addRight(["n/a"]);
questionSet.push(root);

var root = new Question("Do you want logging?", "yes", "no");
root.addLeft(["morgan"]);
root.addRight(["n/a"]);
questionSet.push(root);

var root = new Question("Do you want to send emails?", "yes", "no");
root.addLeft(["nodemailer"]);
root.addRight(["n/a"]);
questionSet.push(root);

var root = new Question("Do you want to use promises?", "yes", "no");
root.addLeft(["bluebird"]);
root.addRight(["n/a"]);
questionSet.push(root);

var root = new Question("Do you want your server to be real time?", "yes", "no");
root.addLeft(["socket.io"]);
root.addRight(["n/a"]);
questionSet.push(root);

var readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var index=0;
var currentNode = questionSet[index];
/*
console.log(currentNode.question+' ('+currentNode.la+'/'+currentNode.ra+')');

rl.on('line', function(answer){
  if(answer===currentNode.la)
    currentNode=currentNode.left;
  if(answer===currentNode.ra)
    currentNode=currentNode.right;
  if(currentNode instanceof Array){
    currentNode.map(function(a){
      answers.push(a);
    });
    console.log(answers);
    index++;
    currentNode=questionSet[index];
    if(currentNode!==undefined)
      if(typeof currentNode.question!== 'undefined')
        console.log(currentNode.question+' ('+currentNode.la+'/'+currentNode.ra+')');
  } else
    console.log(currentNode.question+' ('+currentNode.la+'/'+currentNode.ra+')');

});*/

module.exports = questionSet;
