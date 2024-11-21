const express = require('express');
const app = express();
const productosRoutes = require('./routes/productosRoutes.js')

app.use(express.json())
app.use('/productos', productosRoutes);


app.listen(3000, ()=>{
    console.log("Servidor activo en el puerto 3000")
})