var express = require('express');
var app = express();

//Template Engine
app.set('view enging', 'ejs');

//Serving static files
app.use(express.static('./public'));

app.listen(3000);
console.log("Simple to do app running in the port 3000")