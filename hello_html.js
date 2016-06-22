var http = require("http"),
    fs = require("fs");

var htmlTemplate = fs.readFileSync("./index.html");

http.createServer(function (req, res) {
    res.write(htmlTemplate);
    res.end();
}).listen(8083);