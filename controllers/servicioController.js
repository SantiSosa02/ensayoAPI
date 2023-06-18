const Servicio = require('../models/servicioModel');

const servicioGet = async (req, res = response) => {

  const _id = req.query._id
  if (_id != undefined ) {
      const servicios = await Servicio.findById(_id)
      res.json({
        servicios
      });
      return;
  }
  
  const servicios = await Servicio.find()
  res.json({
    servicios
  })
}

const servicioPost = async (req, res ) => {
  try {
      // Capturar atributos o parámetros
      const body = req.body;
      // Instanciar el objeto
      const servicio = new Servicio(body);

      // Guardar objeto
      await servicio.save();

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

const servicioPut = async (req, res = response) => {
  let id = null;
  if (req.query != null && req.query.id != null) {
      id = req.query.id;
  } 
  const { nombre, precioVenta,estado} = req.body;
  let mensaje = "";

  try {
      if (id != null) {

          const update = { nombre: nombre , precioVenta:precioVenta, estado:estado };

         const servicio = await Servicio.findByIdAndUpdate(
              id,
              update,
              {new: true, runValidators: true}
            );

            if (servicio) {
              mensaje = "La modificación se efectuó correctamente";
            } else {
              mensaje = "El servicio no fue encontrado";
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


const servicioDelete = async (req, res) => {
  const { _id } = req.body;

  try {
    const result = await Servicio.deleteOne({ _id });

    if (result.deletedCount === 1) {
      res.json({
        msg: 'El servicio ha sido eliminado correctamente',
      });
    } else {
      res.status(404).json({
        msg: 'No se encontró el servicio',
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      msg: 'Ocurrió un error al eliminar el servicio',
    });
  }
};

module.exports = {
  servicioGet,
  servicioPost,
  servicioPut,
  servicioDelete
};
