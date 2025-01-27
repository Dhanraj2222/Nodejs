const fs = require('fs')
//fs.writeFileSync('first.txt','welcome to the code')  //file system module present in fs for creating a new file.



fs.appendFileSync('first.txt','this is appended text','utf-8')  //file system module present in fs for appending text in presented  file.

console.log('file upended succesfully')