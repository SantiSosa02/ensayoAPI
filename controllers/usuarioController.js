const { response } = require('express')

const Usuario = require('../models/usuarioModel')

const usuarioGet = async (req, res = response) => {

  const _id = req.query._id
  if (_id != undefined ) {
      const usuarios = await Usuario.findById(_id)
      res.json({
          usuarios
      });
      return;
  }
  
  const usuarios = await Usuario.find()
  res.json({
  usuarios
  })
}


const usuarioPost = async (req, res ) => {
  try {
      // Capturar atributos o parámetros
      const body = req.body;
      // Instanciar el objeto
      const usuario = new Usuario(body);

      // Guardar objeto
      await usuario.save();

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


const usuarioPut = async (req, res = response) => {
  let id = null;
  if (req.query != null && req.query.id != null) {
      id = req.query.id;
  } 
  const { nombres, apellidos, correo, estado} = req.body;
  let mensaje = "";

  try {
      if (id != null) {

          const update = { nombres: nombres , apellidos: apellidos, correo: correo, estado: estado};

         const usuario = await Usuario.findByIdAndUpdate(
              id,
              update,
              {new: true, runValidators: true}
            );

            if (usuario) {
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


  const usuarioDelete = async (req, res = response) => {
    const { _id } = req.body; 
  
    try {
      const result = await Usuario.deleteOne({ _id: _id }); 
  
      if (result.deletedCount === 1) {
        res.json({
          msg: 'El usuario ha sido eliminado correctamente',
        });
      } else {
        res.status(404).json({
          msg: 'No se encontró el usuario',
        });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({
        msg: 'Ocurrió un error al eliminar el usuario',
      });
    }
  };
  
 
module.exports = {
    usuarioGet,
    usuarioPost,
    usuarioDelete,
    usuarioPut
}