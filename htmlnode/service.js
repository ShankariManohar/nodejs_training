var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-type': 'text/html'});
    var myreadstream = fs.createReadStream(__dirname +'/index.html','utf8');
    myreadstream.pipe(res);
});

server.listen(5000);
console.log('Listening your 5000 port');