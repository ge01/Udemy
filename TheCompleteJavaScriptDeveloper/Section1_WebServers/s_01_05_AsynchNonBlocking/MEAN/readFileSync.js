var fs = require('fs');

console.log("Going to get a file");

// Read file synchronosly
//var file = fs.readFileSync('readFileSync.js');

// Read file asynchronosly

// Named callbacks
var onFileLoad = function(err, file) {
  console.log("Got the file");
};

fs.readFile('readFileSync.js', onFileLoad);

console.log("App continuess...");
