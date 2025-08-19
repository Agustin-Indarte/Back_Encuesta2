import Encuesta from '../models/Encuesta.model.js';

export const crearEncuesta = async (req, res) => {
  try {
    // Validación básica (puedes mejorarla)
    const { name, state, category, image, cards } = req.body;
    if (!name || !state || !category) {
      return res.status(400).json({ message: 'Faltan campos obligatorios' });
    }

    const nuevaEncuesta = new Encuesta({ name, state, category, image, cards });
    await nuevaEncuesta.save();
    res.status(201).json({ message: 'Encuesta creada', encuesta: nuevaEncuesta });
  } catch (error) {
    res.status(500).json({ message: 'Error al crear la encuesta', error });
  }
};

// Obtener todas las encuestas
export const obtenerEncuestas = async (req, res) => {
  try {
    const encuestas = await Encuesta.find();
    res.status(200).json(encuestas);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las encuestas', error });
  }
};

// Eliminar una encuesta por ID
export const eliminarEncuesta = async (req, res) => {
  try {
    const { id } = req.params;
    const encuestaEliminada = await Encuesta.findByIdAndDelete(id);
    if (!encuestaEliminada) {
      return res.status(404).json({ message: 'Encuesta no encontrada' });
    }
    res.status(200).json({ message: 'Encuesta eliminada' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar la encuesta', error });
  }
};

// Actualizar una encuesta por ID
export const actualizarEncuesta = async (req, res) => {
  try {
    const { id } = req.params;
    const datosActualizados = req.body;
    const encuestaActualizada = await Encuesta.findByIdAndUpdate(id, datosActualizados, { new: true });
    if (!encuestaActualizada) {
      return res.status(404).json({ message: 'Encuesta no encontrada' });
    }
    res.status(200).json({ message: 'Encuesta actualizada', encuesta: encuestaActualizada });
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar la encuesta', error });
  }
};