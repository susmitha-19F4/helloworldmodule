//import http from "http";
const a=require("fs");
const http=require("http");
http.createServer(function(req,res){
    res.writeHead(200,{'content-Type':'Text/html'});
    res.end('Hello world');
}).listen(8081);