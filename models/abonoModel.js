const {Schema, model} = require ('mongoose');

const AbonoShema= new Schema({
    numeroFactura:{
        type:Number,
        required: [true,'El nombre es requerido']
    
    },
    fechaAbono:{
        type:Date,
        required:[true,'La descripcion  es requerida'],
    },
    valorAbono:{
        type:String,
        required:[true,'El estado es obligatorio'],
    },
    estado:{
        type:String,
        required:[true,'El estado es obligatorio'],
        default:true
    }
    
})
module.exports = model('Abono',AbonoShema);

