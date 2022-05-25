const { dirname } = require('path');
const path = require('path');

// Base file name
console.log(path.basename(__filename));

// Directory name

console.log(path.dirname(__filename));

// file extention

console.log(path.extname(__filename));

// Create path obejct

console.log(path.parse(__filename));

// Contcat paths
console.log(path.join(__dirname, 'test', 'hello.html'))