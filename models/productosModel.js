const {Schema, model} = require ('mongoose');

const ProductoSchema= new Schema({
    nombre:{
        type:String,
        required: [true,'El campo es requerido']
    },
    categoria:{
        type:String,
        required:[true,'La categoria es requerida']
       
    },
    stockMinimo:{
        type:Number,
        required:[true,'El stock minimo es requerido'],
        min:5
    
    },
    cantidad:{
        type:Number,
        required:[true,'La cantidad es requerida'],
        max:200
    },
    precioVenta:{
        type:String,
        required:[true,'El precio  es obligatorio'],
    },
    estado:{
        type:String,
        required:[true,'El estado es obligatorio'],
        default:true
    }
    

})
module.exports = model('Producto',ProductoSchema);

