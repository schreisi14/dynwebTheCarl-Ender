//Documentation

//Configuration

//Variables
var fs = require('fs');
var StaticController = function(parsedurlinfo, response){
	this.parsedurlinfo = parsedurlinfo
	this.response = response
};

StaticController.portotype.handle = function(){
	console.log("Handling Static Content");
};


module.exports.StaticController = StaticController
