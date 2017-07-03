var fs = require('fs');

console.log("Going to get a file");

// Read file synchronosly
//var file = fs.readFileSync('readFileSync.js');

// Read file asynchronosly
fs.readFile('readFileSync.js', function(err, file) {
  console.log("Got the file");
});

console.log("App continuess...");
