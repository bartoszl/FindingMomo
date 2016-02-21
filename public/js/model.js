/**
 * Created by baird on 20/02/2016.
 */
/*jslint node: true, browser: true, white: true */
"use strict";

function Model() {
    var qTree;
    var index;
    var currentNode;
    var answers = [];

    this.getTree = function(){
        return qTree;
    };
    this.setTree = function(tree){
        qTree = tree;
    };

    this.answerQuestion = function(answer){
        if(answer === currentNode.la){
            currentNode = currentNode.left;
        }
        if(answer === currentNode.ra){
            currentNode = currentNode.right;
        }
        if(currentNode instanceof Array){
            currentNode.map(function(a){
                if(a !== "n/a") {
                    answers.push(a);
                }
            });
            console.log(answers);
            //console.log(currentNode);
            index++;

        currentNode = qTree[index];
        if(currentNode!==undefined) {
            if (typeof currentNode.question !== 'undefined') {
                //console.log(currentNode.question+'('+currentNode.la+'/'+currentNode.ra+')');
               // answers.push(currentNode);
            }
        }
            else{
            //console.log(currentNode.question+'('+currentNode.la+'/'+currentNode.ra+')');
            //answers.push(currentNode);
            }
        }
    };

    this.getAnswers = function(){
        return answers;
    }
    this.getQuestion = function (){
		console.log(currentNode);
		if(typeof currentNode === 'undefined'){
			return -1;
		}
        return currentNode.question +" ( "+currentNode.la+" / "+currentNode.ra + " )";
    };

    this.init = function(){
        index = 0;
        currentNode = qTree[index];
        //Send First Question
    };

}