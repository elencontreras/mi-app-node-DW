const express = require('express');
const routes = express.Router();
const productosController = require('./../controllers/productosController')


routes.get('/obtener', productosController.obtenerProductos);

routes.get('/obtener/:id', productosController.obtenerProducto);

routes.post('/crear', (req, res)=>{
    res.json({msj: 'insertar productos'})
})

module.exports = routes;