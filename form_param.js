var http = require("http"),
    fs = require("fs");
parser = require("./param_parser.js");
render = require("./render_view.js");

var parserFunction = parser.parse;
var renderFunction = render.render;


http.createServer(function (req, res) {
    //if the request is for favIcon don't execute the code
    if ((req.url.indexOf("favicon.ico")) > 0) {
        return;
    }

    fs.readFile("./index.html", function (err, html) {

        var html_string = html.toString();
        var parametersObjet = parserFunction(req);

        res.writeHeader(200, { "Context-Type": "text/html" });
        res.write(renderFunction(html_string, parametersObjet));
        res.end();

    });
}).listen(8084);

