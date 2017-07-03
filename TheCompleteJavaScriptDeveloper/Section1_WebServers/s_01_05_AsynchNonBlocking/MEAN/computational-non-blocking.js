var child_process = require('child_process');

console.log(1);

// Spawn method of a moduel
// Call it
// Command and Argument
var newProcess = child_process.spawn('node', ['_fibonacci.js'], {
  stdio : 'inherit'
});

//require('./_fibonacci.js');

console.log(2);

// Node.js is designed for io scalability not computational scalability 
