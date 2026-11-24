var sequelize = require('sequelize')

module.exports = (conexion) => {
    const ProductoSchema = conexion.define('producto', {
        idProducto: {
            type : sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombreProducto: {
            type: sequelize.STRING
        },
        marcaProducto : {
            type: sequelize.STRING
        },
         precioProducto : {
            type: sequelize.DOUBLE
        }
    });
    return ProductoSchema;
}