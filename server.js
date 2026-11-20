var express = require ('express')
var productoRoutes = require('./routes/producto-routes')

var app = express()

// motor de vistas
app.set('view engine','ejs')
app.use(express.urlencoded({extended:true}))

app.use('/',productoRoutes)

var port = process.env.port || 3000
app.listen(port, () => {
    console.log('Servidor iniciado en el puerto: '+port)
})