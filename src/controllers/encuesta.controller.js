import Encuesta from "../models/Encuesta.js";

// Crear encuesta
export const crearEncuesta = async (req, res) => {
  try {
    const nuevaEncuesta = await Encuesta.create(req.body);
    res.status(201).json(nuevaEncuesta);
  } catch (error) {
    console.error("Error al crear encuesta:", error);
    res.status(500).json({ error: "Error al crear encuesta" });
  }
};

// Obtener todas las encuestas
export const obtenerEncuestas = async (req, res) => {
  try {
    const encuestas = await Encuesta.find();
    res.status(200).json(encuestas);
  } catch (error) {
    console.error("Error al obtener encuestas:", error);
    res.status(500).json({ error: "Error al obtener encuestas" });
  }
};

// Actualizar encuesta
export const actualizarEncuesta = async (req, res) => {
  try {
    const { id } = req.params;
    const encuestaActualizada = await Encuesta.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(encuestaActualizada);
  } catch (error) {
    console.error("Error al actualizar encuesta:", error);
    res.status(500).json({ error: "Error al actualizar encuesta" });
  }
};

// Eliminar encuesta
export const eliminarEncuesta = async (req, res) => {
  try {
    const { id } = req.params;
    await Encuesta.findByIdAndDelete(id);
    res.status(200).json({ message: "Encuesta eliminada" });
  } catch (error) {
    console.error("Error al eliminar encuesta:", error);
    res.status(500).json({ error: "Error al eliminar encuesta" });
  }
};

