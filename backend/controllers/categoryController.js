const Category = require('../models/categoryModel');

// Obtener todas las categorías
exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Crear una nueva categoría
exports.createCategory = async (req, res) => {
  try {
    const category = new Category({ name: req.body.name });
    const newCategory = await category.save();
    res.status(201).json(newCategory);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Editar una categoría
exports.updateCategory = async (req, res) => {
  try {
    const updatedCategory = await Category.findByIdAndUpdate(req.params.id, { name: req.body.name }, { new: true });
    res.json(updatedCategory);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
