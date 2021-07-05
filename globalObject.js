console.log(__dirname);
console.log(__filename);

var timer = 0;

var time = setInterval(function(){
    timer += 2;
    console.log("incresing by" + timer);

    if(timer > 8){
        clearInterval(time);
    }
},2000)