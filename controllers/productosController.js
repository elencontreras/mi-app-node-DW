
const db = require('./../db')

const obtenerProductos = (req, res)=>{
    try{
        db.query('SELECT * FROM productos', (err, resultados)=>{
            if(err){
                res.status(500).json({msj:"Error al obtener productos"});
                return;
            }

            res.status(200).json(resultados)
        })
    }catch(err){
        res.status(500).json({msj:"Error en el servidor"})
    }
}

const obtenerProducto = (req, res)=>{
    try{
        // const id = req.params.id
        const { id } = req.params

        const sql = "SELECT * FROM productos WHERE id = ?";
        db.query(sql, [id], (err, resultado)=>{
            if(err){
                return res.status(500).json({msj:"Error al obtener producto"})
            }

            if(resultado.length === 0){
                return res.status(404).json({msj:"Producto no encontrado"})
            }

            res.status(200).json(resultado[0])
        })
    }catch(err){
        res.status(500).json({msj:"Error en el servidor"})
    }
}


const crearProducto = (req, res)=>{

    try{
        const {titulo, descripcion, precio, categoria} = req.body;

        db.query('INSERT INTO productos (title, descripcion, price, category) VALUES(?,?,?,?)', [titulo, descripcion, precio, categoria], (err, resultado)=>{
            if(err){
                res.status(500).json({msj:"Error al crear producto"})
            }
            res.status(200).json({msj:"Producto creado exitosamente"})
        })
    }catch(err){
        res.status(500).json({msj:"Errpr en el servidor"})
    }
}


const actualizarProducto = (req, res)=>{
    try{
        const {id} = req.params
        const {titulo, descripcion, precio, categoria} = req.body

        db.query('UPDATE productos SET title = ?, descripcion = ?, price = ?, category = ? WHERE id=?', [titulo, descripcion, precio, categoria, id], (err, resultado)=>{
            if(err){
                return res.status(500).json({msj:"Error al actualizar producto"})
            }

            if(resultado.affectedRows===0){
                return res.status(404).json({msj: "Producto no encontrado"});
            }

            res.status(200).json({msj:"Producto actualizado exitosamente"})
        })
    }catch(error){
        res.status(500).json({msj:"Error en el servidor"})
    }
}

const eliminarProducto =(req, res)=>{
    try{
        const {id} = req.params

        db.query("DELETE FROM productos WHERE id = ?", [id], (err, resultado)=>{
            if(err){
                return res.status(500).json({msj:"Error al eliminar el producto"})
            }

            if(resultado.affectedRows === 0){
                return res.status(404).json({msj:"Producto no encontrado"})
            }

            res.status(200).json({msj:"Producto eliminado existosamente"})
        })

    }catch(error){
        res.status(500).json({msj:"Error en el servidor"})
    }
}




module.exports = {
    obtenerProductos,
    obtenerProducto,
    crearProducto,
    actualizarProducto,
    eliminarProducto
    
}
