var router = require('express').Router()
var {producto} = require('../conexion')

//ruta raíz
router.get('/',(req,res) => {
    res.render('pages/index')
})

//ruta para abrir la pagina de insertar
router.get('/insertarProducto', (req,res)=>{
    res.render('pages/insertarProducto')
})

// ruta o petición para insertar un producto nuevo
router.post('/guardarProducto',(req,res) =>{
    producto.create(req.body)
    .then(() => {
        console.log('Se insertó correctamente el producto')
        res.redirect('/listarProductos')
    })

    .catch((e) =>{
        console.log('Error al insertar: '+e)
    })
})

//ruta  o petición para obtener todos los productos
router.get('/listarProductos', (req,res) =>{
    producto.findAll()
    .then((data) => {
        res.render('pages/listarProductos' , {productos:data})
    })
    .catch ((e) => {
        console.log('Error en la consulta: '+e)
    })
})

//ruta para buscar un producto por su ID
router.get('/buscarProducto/:idProducto', (req,res)=>{
    producto.findAll({
        where: {
            idProducto: req.params.idProducto
        }
    })
    .then((data) =>{
        res.render('pages/modificarProducto', {producto:data})
    })
    .catch ((e) =>{
        console.log('Error en la consulta: '+e)
    })
})

//ruta para modificar un producto 
router.post('/modificarProducto', (req,res) => {
    var idProducto = req.body.idProducto
    const productoModificado ={
        nombreProducto: req.body.nombreProducto,
        marcaProducto: req.body.marcaProducto,
        precioProducto: req.body.precioProducto
    }

    producto.update(productoModificado,{
        where:{
            idProducto: idProducto
        }
    })

    .then(()=>{
        console.log('Producto modificado exitosamente')
        res.redirect('/listarProductos')
    })
    .catch((e) => {
        console.log('Error al modificar: '+e)
    })
})

//Ruta para eliminar un producto
router.get('/eliminarProducto/:idProducto', (req,res) => {
    producto.destroy({
        where: {
            idProducto:req.params.idProducto,

        }
    })

     .then(()=>{
        console.log('Producto eliminado exitosamente')
        res.redirect('/listarProductos')
    })
    .catch((e) => {
        console.log('Error al eliminar: '+e)
    })
})

module.exports = router;
