/* Que 1.
* Marco polo Instructions...
*/ 


var server = require('http');
var express = require('express');
var app = express();
var port = process.env.port || 3000;

var html="";

for(var i=1; i <=1000000; ++i){
        
        if(i % 4 == 0 && i%7!=0){
            html = html+"marco ";
            continue;
        }
        if(i % 7 == 0  && i%4!=0){
            html = html+"polo ";
            continue;
        }
        if(i % 4 == 0 && i % 7 == 0){
            html = html+"marcopolo ";
            continue;
        }

        html = html + i +" ";

        if(i % 1000 == 0){
            html = html+"<br\>";
        }
    }

app.get('/' , function(req,res){
    res.send(html);
});

app.listen(port , function(){
    console.log("Server Listening at port " + port);
});