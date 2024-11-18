
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

module.exports = {
    obtenerProductos,
    obtenerProducto
}
