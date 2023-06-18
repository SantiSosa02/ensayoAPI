const { response } = require('express')

const Venta = require('../models/ventaModel')

const ventaGet = async (req, res = response) => {
  try {
      const ventas = await Venta.find(); // Obtener todos los usuarios desde la base de datos

      res.json({
          ventas: ventas
      });
  } catch (error) {
      console.error(error);
      res.status(500).json({
          msg: 'Ocurrió un error al obtener las ventas'
      });
  }
};

const ventaPost = async (req, res = response) => {
  try {
    const venta = new Venta({
      ...req.body
    });

    await venta.save();

    res.json({
      msg: 'La inserción se hizo correctamente'
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      msg: 'Ocurrió un error al realizar la inserción de la venta'
    });
  }
};


  const ventaDelete = async (req, res = response) => {
    const { _id } = req.body; 
  
    try {
      const result = await Venta.deleteOne({ _id: _id }); 
  
      if (result.deletedCount === 1) {
        res.json({
          msg: 'La ventaha sido eliminada correctamente',
        });
      } else {
        res.status(404).json({
          msg: 'No se encontró la venta',
        });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({
        msg: 'Ocurrió un error al eliminar la venta',
      });
    }
  };
  
 
module.exports = {
    ventaGet,
    ventaPost,
    ventaDelete
}