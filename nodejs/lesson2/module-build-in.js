//Read file
var fs = require('fs');

var text = fs.readFileSync('./song.txt','utf8');

console.log(text);

//Write file

fs.writeFileSync('./song2.txt','Have a nice day!');