import Category from '../models/category.model.js';

// Crear categoría
export const createCategory = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ message: 'El nombre es obligatorio' });
    }

    // Verificar duplicados
    const existing = await Category.findOne({ name: name.trim() });
    if (existing) {
      return res.status(400).json({ message: 'La categoría ya existe' });
    }

    const category = new Category({ name: name.trim() });
    await category.save();

    res.status(201).json({ message: 'Categoría creada', category });
  } catch (error) {
    console.error('Error creando categoría:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

// Obtener todas las categorías
export const getCategories = async (req, res) => {
  try {
    const categories = await Category.find().sort({ createdAt: -1 });
    res.status(200).json(categories);
  } catch (error) {
    console.error('Error obteniendo categorías:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

// Eliminar categoría por ID
export const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await Category.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ message: 'Categoría no encontrada' });
    }

    res.status(200).json({ message: 'Categoría eliminada' });
  } catch (error) {
    console.error('Error eliminando categoría:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};


