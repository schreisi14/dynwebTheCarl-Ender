#!/usr/bin/env node
//Documentation


//Configuration
var config = req('./config.js');
config.port = (process.argv.length > 2) ? process.argv[2] : config.port;

console.log("Car-Ender Webserver V"+ config.version);


// Funciton
var theapp = req('./controller/master.js');
theapp.startup();


console.log("written by: " + config.author + "\n GPL License try to connect on " + config.server + ":" + config.port);
