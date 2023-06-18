const Categoria = require('../models/categoriaModel');

const categoriaGet = async (req, res = response) => {

  const _id = req.query._id
  if (_id != undefined ) {
      const categorias = await Categoria.findById(_id)
      res.json({
        categorias
      });
      return;
  }
  
  const categorias = await Categoria.find()
  res.json({
    categorias
  })
}

const categoriaPost = async (req, res ) => {
  try {
      // Capturar atributos o parámetros
      const body = req.body;
      // Instanciar el objeto
      const categoria = new Categoria(body);

      // Guardar objeto
      await categoria.save();

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


const categoriaPut = async (req, res = response) => {
  let id = null;
  if (req.query != null && req.query.id != null) {
      id = req.query.id;
  } 
  const { nombre, descripcion, estado} = req.body;
  let mensaje = "";

  try {
      if (id != null) {

          const update = { nombre: nombre , descripcion: descripcion, estado: estado};

         const categoria = await Categoria.findByIdAndUpdate(
              id,
              update,
              {new: true, runValidators: true}
            );

            if (categoria) {
              mensaje = "La modificación se efectuó correctamente";
            } else {
              mensaje = "La categoria no fue encontrado";
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

const categoriaDelete = async (req, res) => {
  const { _id } = req.body;

  try {
    const result = await Categoria.deleteOne({ _id });

    if (result.deletedCount === 1) {
      res.json({
        msg: 'La categoria ha sido eliminado correctamente',
      });
    } else {
      res.status(404).json({
        msg: 'No se encontró la categoria',
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
  categoriaGet,
  categoriaPost,
  categoriaPut,
  categoriaDelete
};
