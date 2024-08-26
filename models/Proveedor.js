const mongoose = require("mongoose");

const ProveedorShema = mongoose.Schema({

    empresa:{
        type: String,
        required: true
    },
    contacto:{
        type: String,
        required: true
    },
    nit:{
        type: Number,
        required: true
    },
    correo:{
        type: String,
        required: true
    },
    direccion:{
        type: String,
        required: true
    },
    telefono:{
        type: Number,
        required: true
    },
    
    

},{versionkey:false});

module.exports = mongoose.model("Proveedor", ProveedorShema);