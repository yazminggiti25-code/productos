var sequelize = require ('sequelize')
var productoModelo = require ('./models/producto')

// conexion con la BD contraseña: 1WiZHAjLja771RFW
//conexion local
/*const conexion = new sequelize ('productos', 'root', 'juju09ju',{
    host: 'localhost',
    port: '3306',
    dialect: 'mysql'

});
*/
//conexion remota
const conexion = new sequelize ('productos', 'Q2Xdjd9pjZRZtKT.root', '1WiZHAjLja771RFW',{
    host: 'gateway01.us-east-1.prod.aws.tidbcloud.com',
    port: '4000',
    dialect: 'mysql',
    dialectOptions:{
        ssl: {
            minVersion: 'TLSv1.2',
            rejectUnauthorized: true
        }
    }

});


const producto = productoModelo(conexion);

conexion.sync({force:false})
.then(() => {
    console.log('Conectado exitosamente a la BD')
})
.catch ((e) => {
    console.log('Error en la conexion : '+e)
});

module.exports = {
    producto
}