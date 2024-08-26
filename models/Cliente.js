const mongoose = require("mongoose");
// este modelo lo vamos a montar en postman

const clienteShema = new mongoose.Schema({

    nombres:{
        type: String,
        required: true
    },
    apellidos:{
        type: String,
        required: true
    },
    documento:{
        type: Number,
        required: true
    },
    correo:{
        type: String,
        required: true
    },
    telefono:{
        type: Number,
        required: true
    },
    direccion:{
        type: String,
        required: true
    },

},{versionkey:false});

module.exports = mongoose.model("Cliente", clienteShema);