import express from 'express';
import { createCategory, getCategories, deleteCategory } from '../controllers/category.controller.js';

const router = express.Router();

// POST - Crear categoría
router.post('/categories', createCategory);

// GET - Listar categorías
router.get('/categories', getCategories);

// DELETE - Eliminar por ID
router.delete('/categories/:id', deleteCategory);

export default router;
