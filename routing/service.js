var express = require('express');

var app = express();
app.get('/', function(req, res){
    res.send("hey we are using express");
});

app.get('/profile/:id', function(req, res){
   res.send("catching the id from url"+req.params.id);
})

app.listen(4000)