const fs = require('fs-extra');

fs.mkdirSync('papka1');
fs,fs.writeFileSync('papka1/myfile.txt', 'HELLO!');
fs.mkdirSync('papka2');
fs.renameSync('./myfile.txt,papka1,/papka2');
fs.mkdirSync('papka3');
fs.copySync('/papka2/myfile.txt', '/papka3/myfile.txt');
fs.removeSync('/tmp/myfile.txt');
fs.rmdirSync('papka1/,papka2/,papka3');
console.log('success!')(err); 
<<<<<<< HEAD
console.error(err);
=======
console.error(err);
/
>>>>>>> 1343548e1e68ad029c9e8cb546d07ebe8f546656
