"use strict";

function View (){

    var input = document.getElementById("input");
    var form = document.getElementById("inputForm");
    var chatItems = document.getElementById("chatItems");


    this.setformCallback = function (callback) {
        form.addEventListener("submit", callback);
    };
    this.setInputCallback = function (callback) {
        key1.addEventListener("change", callback);
    };

    this.addPCMessage = function(message){
        //var newItem = doc
        //var chitem =  "<div class='chatItem><img src='img/pc.png'><p>"+message + "</p></div>";
        var newItem = document.createElement("div");
        newItem.setAttribute("class","chatItem");
        var newItemImg = document.createElement("img");
        newItemImg.setAttribute("src","img/pc.png");
        newItem.appendChild(newItemImg);
        var newItemMessage = document.createElement("p");
        newItemMessage.innerHTML = message;
        newItem.appendChild(newItemMessage);
        chatItems.appendChild(newItem);
        chatItems.scrollTop = chatItems.scrollHeight;
    };
    this.addUserMessage = function(message){
        var newItem = document.createElement("div");
        newItem.setAttribute("class","chatItem");
        var newItemMessage = document.createElement("p");
        newItemMessage.innerHTML = message;
        newItem.appendChild(newItemMessage);
        var newItemImg = document.createElement("img");
        newItemImg.setAttribute("src","img/person.png");
        newItem.appendChild(newItemImg);
        chatItems.appendChild(newItem);
        chatItems.scrollTop = chatItems.scrollHeight;
    };

    this.getInput = function(){
      return input.value;
    };

}
