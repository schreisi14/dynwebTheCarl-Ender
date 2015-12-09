//Documentation

//Configuration

//Variables

//Functions
function Cookie(name,value){
	this.name = name;
	this.value = value;

	var expireOn = new Date();
	expireOn.setDate(expireOn.getDate()+3;

	this.expires = expireOn.toUTCString();
}

Cookie.prototype.toString = function(){
	var result = this.name + " = " + this.value;

	if(this.expries){
		result += "; expires = " + this.expires;
	}

	retrun result;
}

function addCookie(require, response){
	var rc = require.headers.cookie;
	var cookiesDict = {};
	var respCookies = [];
	var id = Math.floor((Math.random()*9000)+1);

	console.log("The request cookie is: -> " + rc);

	rc && rc.split(';').forEach(function(cookie){
		var parts = cookie.split('=');

		if(parts[0]){
			cookiesDict[parts[0]] = rc;
		}

	});

	if(Object.keys(cookiesDict).length === 0){
		respCookies.push(new Cookie('session_id',id);
	}

	response.setHeader("Set-Cookie", respCookie);
}

//Exports
module.exports = Cookie;
module.exports.addCookie = addCookie;
