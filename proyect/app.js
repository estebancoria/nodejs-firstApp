var express = require("express");
var bodyParser = require("body-parser");
var user = require("./models/user").User;
//conección con la base de datos obviously



var app = express();

app.use(express.static('public'));
app.use(bodyParser.json()); //for request with application/json
app.use(bodyParser.urlencoded({extended: true})); //extended = true : Parsear muchas mas cosas, ej: arrays


app.set("view engine", "jade");

app.get("/", function (req, res) {
    res.render("index");
});

app.get("/login", function (req, res) {
    res.render("login");
});

app.post("/users", function (req, res) {

    //creación del nuevo usuario
    var user = new user(
        {
            email: req.body.email,
            password: req.body.password
        }
    );

    user.save(function () {
        res.send("Guardamos tus datos!.");
    });
});


app.listen(8083);
