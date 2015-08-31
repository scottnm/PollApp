// on startup read polls from storage and access them as JSON
var fs = require('fs');
var path = process.argv[2];
var pollsString = fs.readFileSync(path, 'utf8');
var pollsJSON = JSON.parse(pollsString);


// setup server
var express = require('express');
var nodeApp = express();
nodeApp.get('/getpolls', function(request, result) {
	// set the response so get requests in chrome function properly
	result.set({
		'Access-Control-Allow-Origin': '*',
		'Content-Type': 'application/json'
	});
	result.status(200);
	result.send(pollsString);
});
var endpoints = ['getpolls'];

var portArg = process.argv[3];
var server = nodeApp.listen(portArg, function() {
	var host = server.address().address;
	var port = server.address().port;
	endpoints.forEach(function(endpoint) {
		console.log('Poll server listening at http://%s:%s/%s', host, port, endpoint);
	});
});