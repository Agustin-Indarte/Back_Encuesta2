import express from "express";
import {
  crearEncuesta,
  obtenerEncuestas,
  actualizarEncuesta,
  eliminarEncuesta
} from "../controllers/encuesta.controller.js";

const router = express.Router();

// Crear encuesta
router.post("/encuestas", crearEncuesta);

// Obtener todas las encuestas
router.get("/encuestas", obtenerEncuestas);

// Actualizar encuesta por ID
router.put("/encuestas/:id", actualizarEncuesta);

// Eliminar encuesta por ID
router.delete("/encuestas/:id", eliminarEncuesta);

export default router;

