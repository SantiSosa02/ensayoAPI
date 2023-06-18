const {Schema, model} = require ('mongoose');

const CategoriaShema= new Schema({
    nombre:{
        type:String,
        required: [true,'El nombre es requerido']
    
    },
    descripcion:{
        type:String,
        required:[true,'La descripcion  es requerida'],
    },
    estado:{
        type:String,
        required:[true,'El estado es obligatorio'],
        default:true
    }
    
})
module.exports = model('Categoria',CategoriaShema);

