import express from 'express';
import { crearEncuesta } from '../controllers/crearEncuesta.controller.js';

const router = express.Router();

router.post('/encuestas', crearEncuesta);

export default router;