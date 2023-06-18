const {Schema, model} = require ('mongoose');

const ServicioSchema= new Schema({
    
    nombre:{
        type:String,
        required: [true,'El campo es requerido']
    },
    precioVenta:{
        type:String,
        required:[true,'La contraseña es requerida'],
    },
    estado:{
        type:String,
        required:[true,'El estado es obligatorio'],
        default:true
    }

})
module.exports = model('Servicio',ServicioSchema);

