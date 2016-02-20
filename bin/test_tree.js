
var Question = function(q){
  this.question = q;
  this.left = null;
  this.right = null;

  Question.prototype.addLeft = function(question){
    this.left = question;
  }

  Question.prototype.addRight = function(question){
    this.right = question;
  }
}


var root = new Question("Do you need a DB?");
var q1 = new Question("Do you want to host your own DB?");
var q2 = new Question("SQL or NoSQL");

root.addLeft(q1);
q1.addLeft(q2);

var readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var currentNode = root;

console.log(currentNode.question);

rl.on('line', function(answer){
  if(answer==="y")
    currentNode=currentNode.left;
  if(answer==="n")
    currentNode=currentNode.right;
  console.log(currentNode.question);
});

