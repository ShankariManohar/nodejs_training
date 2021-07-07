var fs = require('fs');

// var readme = fs.readFileSync('readme.txt', 'utf8'); // synchronous call
// console.log(readme);


// fs.readFile('readme.txt', 'utf8', function(err, data){ //asycn call
//     console.log(data)
// });

// fs.readFile('readme.txt', 'utf8', function(err, data){
//     fs.writeFile('writemeee.txt', data, function(err, result) {

//         if (err) console.log('error', err);

//     });
// });

fs.unlink('writemeee.txt',function(err){
    if(err) {
        return console.log("Delete error: " + err);
    }
});
