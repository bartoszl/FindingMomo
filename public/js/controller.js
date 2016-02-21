"use strict";

function Controller(){
        var view = new View();
        var model = new Model();

    this.init = function(){
        setFormListener();

    };

    var getUserInput = function(){
        var input = view.getInput();
        view.addUserMessage(input);
        model.answerQuestion(input);
        view.clearInput();
        view.addPCMessage(model.getQuestion());
        view.updateResults(model.getAnswers());
    };
    var  setFormListener = function(){
        view.setformCallback(getUserInput);
    };
    var dataRetrieval = function () {
        var url = "/questions";
        var xhr = new XMLHttpRequest();
        xhr.open('get', url);
        var parser = new DOMParser();

        xhr.onreadystatechange = function () {
            var DONE = 4, OK = 200; // readyState 4 = the request is done; status 200 = successful return
            if (xhr.readyState === DONE) {
                if (xhr.status === OK) {
                    var jsonDoc = JSON.parse(xhr.responseText, "text/json");
                    model.setTree(jsonDoc);
                    model.init();
                    view.addPCMessage(model.getQuestion());
                } else {
                    console.log('XHR Error: ' + xhr.status); // An error occurred during the request.
                }
            }
        };
        xhr.send(null);
    };

    this.getRemoteData = function (){
        if(localStorage.getItem("time") !== new Date().toISOString().split("T")[0]){
            dataRetrieval();
        }
    };


}
var ctrl = new Controller();
window.addEventListener("load", function() {
        ctrl.init();
        ctrl.getRemoteData();
    }
);
