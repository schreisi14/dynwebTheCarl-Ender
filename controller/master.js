//Documentation

//Configuration
var config = require('../config.js');

//Variables
var http = require('http');
var fs = require('fs');


//Helper
var up = require('../helper/urlparser');
var Cookie = requiere('../helper/Cookie.js');

//Controller
var staticcontroller = require('static_controller.js');


//Functions
startup = function(){
	var server = http.createServer(function(require, response){
		Cookie.addCookie(require, response);
		urlparser = new up.Urlparser(require);

		console.log("Parser Controller: " + urlparser.controller);
		console.log("INFO: Routing for resourse: " + urlparser.resource);

		//TODO
		//pfad welcher verfolgt werden soll mittels urlparser

		if(require.method == "POST" || require.method == "PUT"){
			var body = "";
			require.on("data", function(data){body+=data});
			require.on("end", function(){
				console.log("POST-DATA: " ,body);
				handlerController.handle();
			});
		}else{
			handerController.handle();
		}
	});

	server.lister(config.port);
};

//Exports
module.exports.startup = startup;
