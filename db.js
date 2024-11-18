
//importar o requerir mysql 
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'productos-bd',
    port: 8889
})

connection.connect((error) =>{
    if(error){
        console.log('Error al conectar con la base de datos', error);
        return
    }

    console.log('Conexión exitosa a la base de datos')
    
})

module.exports = connection