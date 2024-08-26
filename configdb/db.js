const mongoose = require("mongoose");
require("dotenv").config();

// FUNCION CONEXION CON BASE DE DATOS MONGO
const conectarDB = () =>{
    mongoose
    .connect(process.env.DB_MONGO)
    .then(() => console.log("estamos conectados con mongo DB"))
    .catch((err) => console.error(err));

}

module.exports = conectarDB;