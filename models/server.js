const express=require ('express');
const { dbConnection } =require('../dataBase/config')
const cors=require('cors')
const bodyParser = require('body-parser')

class Server{
        constructor (){
        this.app=express()
        
        this.app.use(bodyParser.urlencoded({extended:true}))
        this.app.use(express.json())
        this.app.use(cors())
        this.port=process.env.PORT  //capturando la variables del puerto
        this.usuarioPath = '/api/usuario'  // ruta publica
        this.productoPath = '/api/producto'  // ruta publica
        this.categoriaPath = '/api/categoria'  // ruta publica
        this.clientePath = '/api/cliente'  // ruta publica
        this.servicioPath = '/api/servicio'  // ruta publica
        this.ventaPath = '/api/venta'
        this.abonoPath = '/api/abono'
        this.routes();
        this.middlewares();//intermediario
        this.conectarDB();
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log(`Escuchando por el puerto ${this.port}`)
        })
    }

    middlewares(){
        this.app.use(express.static(__dirname + '/public'))
        
    }

    routes() {
       this.app.use(this.usuarioPath,require('../routes/usuarios'))
       this.app.use(this.productoPath,require('../routes/productos'))
       this.app.use(this.categoriaPath,require('../routes/categorias'))
       this.app.use(this.clientePath,require('../routes/clientes'))
       this.app.use(this.servicioPath,require('../routes/servicios'))
       this.app.use(this.ventaPath,require('../routes/ventas'))
       this.app.use(this.abonoPath,require('../routes/abonos'))
    }
    async conectarDB(){
      await   dbConnection()
    }
    
}

module.exports= Server
