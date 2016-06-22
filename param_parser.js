function parse(req) {
    var parametersArray, parametersObjet = {};
    if (req.url.indexOf("?") > 0) {
        var urlData = req.url.split("?")[1];
        parametersArray = urlData.split("&");

        for (var i = parametersArray.length - 1; i >= 0; i--) {
            var aParam = parametersArray[i];
            var param_data = aParam.split("=");
            parametersObjet[param_data[0]] = param_data[1];

        }
    }
    return parametersObjet;
}

module.exports.parse = parse;