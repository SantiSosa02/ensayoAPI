const Abono = require('../models/abonoModel');

const abonoGet = async (req, res) => {
  try {
    const abonos = await Abono.find();
    res.json({
      abonos: abonos
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      msg: 'Ocurrió un error al obtener los abonos'
    });
  }
};

const abonoPost = async (req, res) => {
  try {
    const abono = new Abono({
      ...req.body
    });

    await abono.save();

    res.json({
      msg: 'La inserción se hizo correctamente'
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      msg: 'Ocurrió un error al realizar la inserción del abono'
    });
  }
};

const abonoPut = async (req, res = response) => {
  const { _id } = req.body; // Obtener el ID del usuario de req.params

  try {
    const abonoActualizado = await Abono.updateOne(
      { _id: _id },
      req.body,
      { new: true }
    );

    if (!abonoActualizado) {
      return res.status(404).json({
        msg: 'Abono no encontrado',
      });
    }

    res.json({
      msg: 'PUT API',
      abono: abonoActualizado,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: 'Error en el servidor',
    });
  }
};


const abonoDelete = async (req, res) => {
  const { _id } = req.body;

  try {
    const result = await Abono.deleteOne({ _id });

    if (result.deletedCount === 1) {
      res.json({
        msg: 'El abono ha sido eliminado correctamente',
      });
    } else {
      res.status(404).json({
        msg: 'No se encontró el abono',
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
  abonoGet,
  abonoPost,
  abonoPut,
  abonoDelete
};
