const express = require('express');
const routes = express.Router();
const productosController = require('./../controllers/productosController')


routes.get('/obtener', productosController.obtenerProductos);

routes.get('/obtener/:id', productosController.obtenerProducto);

routes.post('/crear', productosController.crearProducto);

routes.put('/actualizar/:id', productosController.actualizarProducto)

routes.delete('/eliminar/:id', productosController.eliminarProducto)
module.exports = routes;