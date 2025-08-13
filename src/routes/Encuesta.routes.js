import express from 'express';
import { crearEncuesta, obtenerEncuestas, eliminarEncuesta, actualizarEncuesta } from '../controllers/Encuestas.controller.js';

const router = express.Router();

router.post('/encuestas', crearEncuesta);
router.get('/encuestas', obtenerEncuestas);
router.delete('/encuestas/:id', eliminarEncuesta);
router.put('/encuestas/:id', actualizarEncuesta);

export default router;