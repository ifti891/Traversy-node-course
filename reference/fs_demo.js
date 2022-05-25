const fs = require('fs');
const path = require('path');

// create folder
// fs.mkdir(path.join(__dirname, '/test'), {}, function (err) {
//   if (err) throw err
//   console.log('Folder created');
// })

// create file and write to it

// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello world! ', function (err) {
//   if (err) throw err
//   console.log('File written to..');

//   // File append
//   fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), ' I love nodejs!', function (err) {
//     if (err) throw err
//     console.log('File written to..');
//   })

// })

// read file
// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', function (err, data) {
//   if (err) throw err
//   console.log(data);
// })

// rename

fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'helloworld.txt'), function (err) {
  if (err) throw err
  console.log("File renamed...");
})