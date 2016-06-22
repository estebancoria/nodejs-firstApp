var http = require("http"),
    fs = require("fs");

http.createServer(function (req, res) {
    //if the request is for favIcon don't execute the code
    if ((req.url.indexOf("favicon.ico")) > 0) {
        return;
    }

    fs.readFile("./index.html", function (err, html) {
            var html_string = html.toString();
            var name = "";
            var parametersArray;
            var parametersObjet = {};
            if (req.url.indexOf("?") > 0) {
                var urlData = req.url.split("?")[1];
                parametersArray = urlData.split("&");

                for (var i = parametersArray.length - 1; i >= 0; i--) {
                    var aParam = parametersArray[i];
                    var param_data = aParam.split("=");
                    parametersObjet [param_data[0]] = param_data[1];

                }

                var variables = html_string.match(/[^\{\}]+(?=\})/g);
                //this variables is an array with the variable strings

                for (var i = variables.length - 1; i >= 0; i--) {
                    var variable = variables[i];
                    html_string = html_string.replace("{" + variable + "}", parametersObjet[variable]);
                }

            }


            res.writeHeader(200, {"Context-Type": "text/html"});
            res.write(html_string);
            res.end();
        }
    );
}).listen(8084);

