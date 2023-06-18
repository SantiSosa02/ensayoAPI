const Cliente = require('../models/clienteModel');

const clienteGet = async (req, res = response) => {

  const _id = req.query._id
  if (_id != undefined ) {
      const clientes = await Cliente.findById(_id)
      res.json({
        clientes
      });
      return;
  }
  
  const clientes = await Cliente.find()
  res.json({
    clientes
  })
}

const clientePost = async (req, res ) => {
  try {
      // Capturar atributos o parámetros
      const body = req.body;
      // Instanciar el objeto
      const cliente = new Cliente(body);

      // Guardar objeto
      await cliente.save();

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

const clientePut = async (req, res = response) => {
  let id = null;
  if (req.query != null && req.query.id != null) {
      id = req.query.id;
  } 
  const { nombres, apellidos, telefono, correo, estado} = req.body;
  let mensaje = "";

  try {
      if (id != null) {

          const update = { nombres: nombres , apellidos: apellidos,telefono:telefono, correo: correo, estado: estado};

         const cliente = await Cliente.findByIdAndUpdate(
              id,
              update,
              {new: true, runValidators: true}
            );

            if (cliente) {
              mensaje = "La modificación se efectuó correctamente";
            } else {
              mensaje = "El cliente no fue encontrado";
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

const clienteDelete = async (req, res) => {
  const { _id } = req.body;

  try {
    const result = await Cliente.deleteOne({ _id });

    if (result.deletedCount === 1) {
      res.json({
        msg: 'El cliente ha sido eliminado correctamente',
      });
    } else {
      res.status(404).json({
        msg: 'No se encontró el producto',
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      msg: 'Ocurrió un error al eliminar el cliente',
    });
  }
};

module.exports = {
  clienteGet,
  clientePost,
  clientePut,
  clienteDelete
};
