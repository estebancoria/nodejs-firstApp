var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
//conección con la base de datos obviously
var mongoURI = "mongodb://localhost:27017/test";
var MongoDB = mongoose.connect(mongoURI).connection;
;
MongoDB.on('error', function (err) {
    console.log(err.message);
});
MongoDB.once('open', function () {
    console.log("mongodb connection open");
});
//generación de tabla dummie

var userSchemaJSON = {
    email: String,
    password: String
};

//esta clase schema se encarga de crear el documento en base al JSON
var userSchema = new Schema(userSchemaJSON);

var User = mongoose.model("User", userSchema);

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
    var user = new User(
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
