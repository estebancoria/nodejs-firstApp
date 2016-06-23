var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var mongoURI = "mongodb://localhost:27017/test";

mongoose.connect(mongoURI);

var userSchema = new Schema({
    name: String,
    username: String,
    password: String,
    age: Number,
    email: String,
    date_of_birth: Date
});
//constructor de modelos
var User = mongoose.model("User", userSchema);
module.exports.User = User;

/* Tipos de datos en un DB
 String
 Number
 Date
 Buffer
 Boolean
 Mixed
 Objetid
 Array
 -----
 Colleciones => Tablas
 Documentos => Filas
 */