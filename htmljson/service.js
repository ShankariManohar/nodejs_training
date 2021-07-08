var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-type': 'text/html'});
    var myObj = {
        name:"shankari",
        role:"Developer",
        exp:"7"
    }
   res.end(myObj);
});

server.listen(5000);
console.log('Listening your 5000 port');