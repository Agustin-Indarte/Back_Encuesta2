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