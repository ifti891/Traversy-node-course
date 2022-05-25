const os = require('os');

// platform
console.log(os.platform())

// Cpu Arch

console.log(os.arch());

// cpu core info
// console.log(os.cpus())

// free memory

console.log("Free Memory : ", os.freemem())

// total memory

console.log("Total Memory: ", os.totalmem())

// home dir

console.log(os.homedir());

// uptime

console.log("Uptime in seconds:", os.uptime())