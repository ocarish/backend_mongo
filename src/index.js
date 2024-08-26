const express = require("express");
const conectarDB = require("../configdb/db");
const cors = require("cors");



const app = express();
const puerto = process.env.PORT || 5000;

//LLAMAMOS LA FUNCION CONECTAR DB 

conectarDB();
app.use(cors());
app.use(express.json());

//rutas del proyecto
app.use("/api/clientes", require("../routers/clientesRutas"));
app.use("/api/proveedores", require("../routers/proveedoresRutas"));

// RUTA DESDE LA WEB

app.get("/", (req, res) =>{
    res.send("bienvenidos estamos desde el navegador");
});

app.listen(puerto,() => console.log("estamos conectados desde el servidor", puerto));
