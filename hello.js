var http = require("http");

var handler = function (request,response) {
    console.log("Hola Mundo!!");
    response.end("Hola Mundo!");
}
var server = http.createServer(handler);

server.listen(8083);