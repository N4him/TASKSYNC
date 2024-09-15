const Task = require('../models/taskModel');

// Obtener todas las tareas
exports.getTasks = async (req, res) => {
  try {
    const categoryFilter = req.query.category;
    let tasks;

    if (categoryFilter) {
      tasks = await Task.find({ category: categoryFilter });
    } else {
      tasks = await Task.find();
    }

    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Crear una nueva tarea
exports.createTask = async (req, res) => {
  try {
    const lastTask = await Task.findOne().sort({ id: -1 });
    const newId = lastTask ? lastTask.id + 1 : 1;

    // Set default deadline to tomorrow if not provided
    const deadline = req.body.deadline ? new Date(req.body.deadline).toISOString() : new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString();

    const task = new Task({
      id: newId,
      title: req.body.title,
      description: req.body.description,
      status: req.body.status || 'ongoing',
      category: req.body.category || 'Uncategorized', // Establecer categoría
      deadline: deadline  // Establecer fecha límite
    });

    const newTask = await task.save();
    res.status(201).json(newTask);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Actualizar una tarea utilizando un ID personalizado
exports.updateTask = async (req, res) => {
  try {
    const updatedTask = await Task.findOneAndUpdate(
      { customId: req.params.customId },  // Buscar por el campo de ID personalizado
      { 
        title: req.body.title, 
        status: req.body.status, 
        category: req.body.category,
        deadline: req.body.deadline ? new Date(req.body.deadline).toISOString() : undefined // Actualizar la fecha límite si se proporciona
      },   
      { new: true }
    );
    
    if (!updatedTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.json(updatedTask);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


// Eliminar una tarea
exports.deleteTask = async (req, res) => {
  try {
    console.log(req.params.id);
    const task = await Task.findOne({ id: req.params.id });
    if (!task) return res.status(404).json({ message: 'Task not found' });
    console.log(task);
    await Task.deleteOne({ id: req.params.id });
    res.json({ message: 'Task deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
  // Obtener todas las categorías

};
exports.getCategories = async (req, res) => {
  try {
    const categories = await Task.distinct('category');
    res.json(categories);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }};
