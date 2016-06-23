var express = require("express");

var app = express();

app.set("view engine", "jade");

app.get("/", function (req, res) {
    res.render("index");
});

app.get("/:variable", function (req, res) {
    res.render("form", {nombre: req.params.variable});
});

app.post("/", function (req, res) {
    res.render("form");
});
app.listen(8083);