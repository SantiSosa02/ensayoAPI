const {Schema, model} = require ('mongoose');

const ClienteSchema= new Schema({
    nombres:{
        type:String,
        required: [true,'El nombre es requerido']
    
    },
    apellidos:{
        type:String,
        required:[true,'El apellido  es requerida'],
    },
    telefono:{
        type:String,
        required:[true,'El telefono es obligatorio'],
        default:true
    },
    correo:{
        type:String,
        required:[true,'El correo es obligatorio'],
        default:true
    },
    estado:{
        type:String,
        required:[true,'El estado es obligatorio'],
        default:true
    }
    
})
module.exports = model('Cliente',ClienteSchema);

