var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
    if(req.url === '/home' || req.url === '/'){
        res.writeHead(200, {'Content-Type':'text/html'});
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    } else if(req.url === '/contact'){
        res.writeHead(200, {'Content-Type':'text/html'});
        fs.createReadStream(__dirname + '/contact-us.html').pipe(res);
    } else{
        res.writeHead(200, {'Content-Type':'text/html'});
        fs.createReadStream(__dirname + '/404.html').pipe(res);
    }
});

server.listen(4000);