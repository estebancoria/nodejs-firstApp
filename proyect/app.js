var express = require("express");
var bodyParser = require("body-parser");
var User = require("./models/user.js").User;
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
    console.log("Estamos dentro de /users");
    //creación del nuevo usuario
    var user = new User(
        {
            email: req.body.email,
            password: req.body.password,
            password_confirmation: req.body.password_confirmation
        }
    );

    console.log("Tenemos el nuevo Usuario");
    console.log(user);
    console.log("Aqui la confirmacion: "+user.password_confirmation);

    user.save(function () {
        res.send("Guardamos tus datos!.");
    });
});


app.listen(8083);
