const Producto = require('../models/productosModel');

const productoGet = async (req, res = response) => {

  const _id = req.query._id
  if (_id != undefined ) {
      const productos = await Producto.findById(_id)
      res.json({
          productos
      });
      return;
  }

  
  const productos = await Producto.find()
  res.json({
    productos
  })
}

const productoPost = async (req, res ) => {
  try {
      // Capturar atributos o parámetros
      const body = req.body;
      // Instanciar el objeto
      const producto = new Producto(body);

      // Guardar objeto
      await producto.save();

      res.json({
          msg: 'La inserción se efectuó exitosamente'
      });
  } catch (error) {
      console.error(error);
      res.status(500).json({
          msg: error.message
      });
  }
};

const productoPut = async (req, res = response) => {
  let id = null;
  if (req.query != null && req.query.id != null) {
      id = req.query.id;
  } 
  const { nombre, categoria, stockMinimo, cantidad, precioVenta, estado} = req.body;
  let mensaje = "";

  try {
      if (id != null) {

          const update = { nombre: nombre , categoria: categoria, stockMinimo: stockMinimo, cantidad: cantidad, precioVenta:precioVenta, estado:estado };

         const producto = await Producto.findByIdAndUpdate(
              id,
              update,
              {new: true, runValidators: true}
            );

            if (producto) {
              mensaje = "La modificación se efectuó correctamente";
            } else {
              mensaje = "El empleado no fue encontrado";
            }
      }
      else {
          mensaje = "Ingrese un id";
      }
 
  } catch (error) {
    console.error(error);
    mensaje = error.message;
  }

  res.json({
    msg: mensaje,
  });
};



const productoDelete = async (req, res) => {
  const { _id } = req.body;

  try {
    const result = await Producto.deleteOne({ _id });

    if (result.deletedCount === 1) {
      res.json({
        msg: 'El producto ha sido eliminado correctamente',
      });
    } else {
      res.status(404).json({
        msg: 'No se encontró el producto',
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      msg: 'Ocurrió un error al eliminar el producto',
    });
  }
};

module.exports = {
  productoGet,
  productoPost,
  productoPut,
  productoDelete
};
