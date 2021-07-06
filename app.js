console.log('hi');

setTimeout(function(){
    console.log("you have passed 3 seconds");
},3000);

var myLogModule = require('./localModules.js');

myLogModule.info('Node.js started');