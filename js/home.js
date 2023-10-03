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
console.error(err);
<<<<<<< HEAD
;
=======
/
>>>>>>> main
