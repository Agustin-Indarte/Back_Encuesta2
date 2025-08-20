import Respuesta from '../models/Respuestas.model.js';

export const guardarRespuesta = async (req, res) => {
  try {
    const { encuesta, usuario, respuestas } = req.body;
    if (!encuesta || !respuestas) {
      return res.status(400).json({ message: 'Faltan datos obligatorios' });
    }
    const nuevaRespuesta = new Respuesta({ encuesta, usuario, respuestas });
    await nuevaRespuesta.save();
    res.status(201).json({ message: 'Respuesta guardada', respuesta: nuevaRespuesta });
  } catch (error) {
    res.status(500).json({ message: 'Error al guardar la respuesta', error });
  }
};

export const obtenerRespuestasPorEncuesta = async (req, res) => {
  try {
    const { idEncuesta } = req.params;
    const respuestas = await Respuesta.find({ encuesta: idEncuesta });
    res.status(200).json(respuestas);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener respuestas', error });
  }
};

export const obtenerRespuestasPorUsuario = async (req, res) => {
  try {
    const { idUsuario } = req.params;
    const respuestas = await Respuesta.find({ usuario: idUsuario }).populate('encuesta');
    res.status(200).json(respuestas);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener respuestas', error });
  }
};