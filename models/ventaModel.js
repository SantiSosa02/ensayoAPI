const { Schema, model } = require('mongoose');

const VentaSchema = new Schema({
  cliente: {
    type: String,
    required: [true, 'El clientes es requerido']
  },
  fecha: {
    type: Date,
    required: [true, 'La fecha es requerida']
  },
  numeroFactura: {
    type: String,
    unique:true,
    required: [true, 'El numero de factura es requerida']
  },
  metodoPago: {
    type: String,
    required: [true, 'El metodo de pago es requerido']
  },
  valorFactura: {
    type: String,
    required: [true, 'El valor de la factura es requerido']
  },
  estado: {
    type:String,
    enum:['Activo','Inactivo'],
    default: 'Activo'
  },
  productos: [{
    producto: {
      type: String,
      required: [true, 'El producto es requerido']
    },
    cantidad: {
      type: Number,

    },
    precioUnitario: {
      type: Number,
      required: [true, 'El precio es requerido']
    }
  }],
  servicios: [{
    servicio: {
      type: String,

    },
    cantidad: {
      type: Number,
      required: [true, 'La cantidad es requerido']
    },
    precioUnitario: {
      type: Number,
      required: [true, 'El precio es requerido']
    }
  }]
});

module.exports = model('Venta', VentaSchema);
