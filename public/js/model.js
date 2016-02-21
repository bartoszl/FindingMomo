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
    var desc = [];

    this.getTree = function(){
        return qTree;
    };
    this.setTree = function(tree){
        qTree = tree;
    };

    this.setDesc = function (description){
        desc = description;
        console.log(desc);
    }

    this.getDesc = function (){
        return desc;
    }
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
            index++;

        currentNode = qTree[index];
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
    this.initDesc = function(){

    }

}
