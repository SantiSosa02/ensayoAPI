const {Schema, model} = require ('mongoose');

const UsuarioSchema= new Schema({
    nombres:{
        type:String,
        required: [true,'El campo es requerido']
    },
    apellidos:{
        type:String,
        required:[true,'El apellido es requerido']
    },
    correo:{
        type:String,
        unique:true,
        required:[true,'El correo es requerido']
    
    },
    password:{
        type:String,
        required:[true,'La contraseña es requerida'],
    },
    estado:{
        type:String,
        required:[true,'El estado es obligatorio'],
        default:true
    }

})
module.exports = model('Usuario',UsuarioSchema);

