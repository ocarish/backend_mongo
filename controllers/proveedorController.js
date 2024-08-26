const Proveedor = require("../models/Proveedor");

// funcion agregar proveedor 

exports.agregarProveedores = async(req, res) =>{
    try {
        let proveedores;
        proveedores = new Proveedor(req.body);
        await proveedores.save();
        res.json(proveedores);
    } catch (error) {
        console.log(error)
        res.status(500).send("hubo un error al agregar un proveedor");
    }
}

// funcion buscar proveedor

exports.mostrarProveedores = async (req, res) =>{
    try {
        const proveedores = await Proveedor.find();
        res.json(proveedores);
    }catch (error) {
        console.log(error)
        res.status(500).send("hubo un error al mostrar los proveedores");
    }
}

// buscar un proveedor

exports.buscarProveedores = async (req, res) =>{
    try {
        const proveedores = await Proveedor.findById(req.params.id);
        if(!proveedores){
            res.status(404).send({msg:"el proveedor no se encuentra por id"})
        }else{
            res.json(proveedores);
        }
    } catch (error) {
        console.log(error)
        res.status(500).send("hubo un error al buscar un proveedor");
    }
}

// funcion modificar proveedores con el metodo put

exports.modificarProveedores = async (req, res) =>{
    try {
        const proveedores = await Proveedor.findOneAndUpdate({_id: req.params.id}, req.body, {new:true});
        if(!proveedores) {
            res.status(404).send("proveedor no encontrado");
        }else {
            res.json(proveedores);
        }
    } catch (error) {
        console.log(error)
        res.status(500).send("hubo un error al editar un proveedor");
    }
} 


exports.eliminarProveedores = async(req, res) =>{
    try {
       let proveedores = await Proveedor.findById({_id: req.params.id});
       if(!proveedores){
        res.status(404).send("el proveedor no existe");
        return
       }
       await Proveedor.findOneAndDelete({_id: req.params.id});
       res.json({msg: "el proveedor fue eliminado con exito"});
       return

    } catch (error) {
        console.log(error)
        res.status(500).send("hubo un error al eliminar un proveedor");
    }
}