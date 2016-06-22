var http = require("http"),
    fs = require("fs");

http.createServer(function (req, res) {
    fs.readFile("./index.html", function (err,html) {
        var html_string = html.toString();

        var name = "Esteban";

        var variables = html_string.match(/[^\{\}]+(?=\})/g);
        //this variables is an array with the variable strings

        for (var i=variables.length -1 ; i>=0; i--){
            var value = eval(variables[i]);
            html_string = html_string.replace("{"+variables[i]+"}",value);
        }

        res.writeHeader(200, {"Context-Type": "text/html"});
        res.write(html_string);
        res.end();
    });
}).listen(8083);

