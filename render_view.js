function render(htmlTemplate, parametersObjet) {
    var variables = htmlTemplate.match(/[^\{\}]+(?=\})/g);
    //this variables is an array with the variable strings

    for (var i = variables.length - 1; i >= 0; i--) {
        var variable = variables[i];
        htmlTemplate = htmlTemplate.replace("{" + variable + "}", parametersObjet[variable]);
    }
    return htmlTemplate;

}
module.exports.render = render;