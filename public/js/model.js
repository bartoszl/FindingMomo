/**
 * Created by baird on 20/02/2016.
 */
/*jslint node: true, browser: true, white: true */
"use strict";

function Model() {
    var qTree;

    this.getTree = new function(){
        return qTree;
    };
    this.setTree = new function(tree){
        qTree = tree;
    };

}