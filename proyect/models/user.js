var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var mongoURI = "mongodb://localhost:27017/test";
console.log("Estamoos por conectar con la base")
mongoose.connect(mongoURI);

var userSchema = new Schema({
    name: String,
    last_name:String,
    username: String,
    password: String,
    age: Number,
    email: String,
    date_of_birth: Date
});
//esto no se guarda en la base de dato, pero son los metodos del objeto
userSchema.virtual("password_confirmation").get(function () {
    return this.psswc;
}).set(function (password) {
    this.psswc = password;
});

//otro ejemplo de virtual
userSchema.virtual("full_name").get(function () {
    return this.name + this.last_name;
}).set(function (full_name) {
    //BLA BLA...
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