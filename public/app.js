/*jslint node: true, browser: true, white: true */
/*global SidePanelView */
/*global MainPageView */
/*global CurrencyConversion*/
/*global DOMParser*/
"use strict";

function SidebarController(){
   // var sideView = new SidePanelView();
    //var mainView = new MainPageView();
    //var model = new CurrencyConversion();

/*

    var updateDisplay = function(){
        mainView.updateDisplay(1,model.getInput());
        mainView.updateDisplay(0,model.convertCurrency());
        mainView.updateDisplayImage(1,model.currentCurrencyFrom()[2]);
        mainView.updateDisplayImage(0,model.currentCurrencyTo()[2]);
    };

    var toggleSidebar = function (){
        mainView.toggleSidebar();
        updateDisplay();
    };

    var updateFlags = function() {
        var fromTitle = model.currentCurrencyFrom()[1];
        var fromImg = model.currentCurrencyFrom()[2];

        var toTitle = model.currentCurrencyTo()[1];
        var toImg = model.currentCurrencyTo()[2];

        sideView.updateFlags(fromImg,fromTitle, toImg , toTitle);
    };

    var setKeypadListeners = function() {
        mainView.setKey0Callback(function() {model.addInput(0); updateDisplay();});
        mainView.setKey1Callback(function() {model.addInput(1); updateDisplay();});
        mainView.setKey2Callback(function() {model.addInput(2); updateDisplay();});
        mainView.setKey3Callback(function() {model.addInput(3); updateDisplay();});
        mainView.setKey4Callback(function() {model.addInput(4); updateDisplay();});
        mainView.setKey5Callback(function() {model.addInput(5); updateDisplay();});
        mainView.setKey6Callback(function() {model.addInput(6); updateDisplay();});
        mainView.setKey7Callback(function() {model.addInput(7); updateDisplay();});
        mainView.setKey8Callback(function() {model.addInput(8); updateDisplay();});
        mainView.setKey9Callback(function() {model.addInput(9); updateDisplay();});
        mainView.setKeySwCallback(function() {model.swap(); updateFlags(); updateDisplay();});
        mainView.setKeyCCallback(function() {model.setInput(0); updateDisplay();});
    };

    var setFlagSwitcherListeners = function () {
        //Initialise Flag Switcher
        sideView.changeFlag(0, model.currentCurrencyTo()[2], model.currentCurrencyTo()[1]);
        sideView.changeFlag(1, model.currentCurrencyFrom()[2], model.currentCurrencyFrom()[1]);

        //Flag Switcher Buttons
        sideView.setflagfromnextcallback(function(){
            var nextFrom = model.nextCurrencyFrom();
            sideView.changeFlag(1,nextFrom[2],nextFrom[1]);
        });
        sideView.setflagfrompreviouscallback(function(){
            var previousFrom = model.previousCurrencyFrom();
            sideView.changeFlag(1,previousFrom[2],previousFrom[1]);
        });
        sideView.setflagtonextcallback(function(){
            var nextTo = model.nextCurrencyTo();
            sideView.changeFlag(0,nextTo[2],nextTo[1]);
        });
        sideView.setflagtopreviouscallback(function(){
            var previousTo = model.previousCurrencyTo();
            sideView.changeFlag(0,previousTo[2],previousTo[1]);
        });
    };

    var setBankChargeListener = function () {
        sideView.setBankChargeSlideCallback(function () {model.setBankCharge(sideView.getBankCharge());sideView.updateBankValue();});
    };


    var setSidebarToggleListeners = function () {
        mainView.setCloseButtonCallback(function() {toggleSidebar();});
        mainView.setMenuButtonCallback(function() {toggleSidebar();});
    };

    this.init = function(){
        setFlagSwitcherListeners();
        setBankChargeListener();
        setKeypadListeners();
        setSidebarToggleListeners();
        updateDisplay();

    };
*/
    var storeData = function (xmlDoc){
        var cubes = xmlDoc.getElementsByTagName("Cube");
        if (cubes.length > 0) {
            localStorage.setItem("time", cubes[1].getAttribute("time"));
            var i, element;
            for (i = 2; i < 33; i = i + 1) {
                element = cubes[i];
                localStorage.setItem(element.getAttribute("currency"), element.getAttribute("rate"));
            }
        }
        sideView.setTimestamp(localStorage.getItem("time"));
        model.checkForNewData();
    };

    var dataRetrieval = function () {
        var url = "https://devweb2015.cis.strath.ac.uk/~aes02112/ecbxml.php";
        var xhr = new XMLHttpRequest();
        xhr.open('get', url);
        var parser = new DOMParser();

        xhr.onreadystatechange = function () {
            var DONE = 4, OK = 200; // readyState 4 = the request is done; status 200 = successful return
            if (xhr.readyState === DONE) {
                if (xhr.status === OK) {
                    var xmlDoc = parser.parseFromString(xhr.responseText, "text/xml");
                    storeData(xmlDoc);
                } else {
                    console.log('XHR Error: ' + xhr.status); // An error occurred during the request.
                }
            }
        };
        xhr.send(null);
    };
/*
    this.getRemoteData = function (){
        if(localStorage.getItem("time") !== new Date().toISOString().split("T")[0]){
            dataRetrieval();
        }
        model.checkForNewData();
    };


*/
}
var sidebarController = new SidebarController();
window.addEventListener("load", function() {
        sidebarController.init();
        sidebarController.getRemoteData();
    }
);