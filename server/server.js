// on startup read polls from storage and access them as JSON
var NodeFS = require('fs');
var NodePath = require('path');
var pollDirPath = process.argv[2];
var pollFiles = NodeFS.readdirSync(pollDirPath);
var fileContents = [];
pollFiles.forEach(function(file){
  var fileContent = NodeFS.readFileSync(NodePath.join(pollDirPath, file), 'utf8');
  console.log(NodePath.join(pollDirPath, file), fileContent);
  fileContents.push(fileContent);
});

console.log("\n\n\n\n\n ALL CONTENTS", fileContents.join(','));
var pollsString = '[' + fileContents.join(',') + ']';
var pollsJSON = JSON.parse(pollsString);


// setup server
var NodeExpress = require('express');
var nodeApp = NodeExpress();
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
