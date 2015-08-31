var path = process.argv[2];
var fs = require('fs');

// on startup read polls from storage and access them as JSON
var pollsString = fs.readFileSync(path, 'utf8');
var pollsJSON = JSON.parse(pollsString);