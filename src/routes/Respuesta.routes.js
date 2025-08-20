import express from 'express';
import { guardarRespuesta, obtenerRespuestasPorEncuesta, obtenerRespuestasPorUsuario } from '../controllers/Respuestas.controller.js';

const router = express.Router();

router.post('/respuestas', guardarRespuesta);
router.get('/respuestas/encuesta/:idEncuesta', obtenerRespuestasPorEncuesta);
router.get('/respuestas/usuario/:idUsuario', obtenerRespuestasPorUsuario);

export default router;