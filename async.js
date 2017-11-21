const fs = require('fs');

// const readFromFile = (fileName)=>{
//   // WRITE CODE HERE
//   return fs.readFileSync(fileName,'utf8');
// };

const readFromFile = (pathName,callback) => {
    return fs.readFile(pathName,'utf8',(err,data) => {
        if (err) {
            callback(err);
        }
        else {
            callback(data);
        }
    });
}

readFromFile('sample.txt',(data) => {
    console.log('START');
    console.log(data);
    console.log('END');
});