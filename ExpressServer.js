var host = "127.0.0.1";
var port = 1337;
var express = require("express");
var Sum = require("./sumModule.js");
var app = express();

app.get("/", function(request, response) {
   response.send("Hello World!");
});

app.get("/sum/:num1/:num2", function(request, response) {
   response.send("Sum of "+(request.params.num1)+" and " + (request.params.num2) + " = " 
   + Sum.nodeSum(request.params.num1,request.params.num2) );
});


app.listen(port, host);
console.log('Express listening on host='+host+":"+port);
