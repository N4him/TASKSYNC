const Task = require('../models/taskModel');

const User = require('../models/userModel');


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
      assignedTo: req.body.assignedTo, // Asignar la tarea a un usuario específico
      creator: req.user.id // Establecer el creador de la tarea al usuario autenticado
      category: req.body.category || 'Uncategorized', // Establecer categoría
      deadline: deadline  // Establecer fecha límite
    });

    const newTask = await task.save();
    res.status(201).json(newTask);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


// Obtener tareas asignadas a un usuario
exports.getTasksForUser = async (req, res) => {
  try {
    const userId = req.user.id; // Obtén el ID del usuario del middleware de autenticación
    const tasks = await Task.find({ creator: userId })
      .populate('assignedTo', 'name') // Incluye el nombre del usuario asignado
      .exec();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


// Obtener tareas asignadas a un usuario específico por ID
exports.getTasksByUserId = async (req, res) => {
  try {
    const userId = req.user.id; // Obtener el userId desde los parámetros de la ruta
    console.log(userId)

    // Buscar tareas asignadas a este usuario
    const tasks = await Task.find({ assignedTo: userId })
      .populate('creator', 'name') // Incluye el nombre del creador de la tarea
      .exec();

    // Si no hay tareas asignadas al usuario, devolver un mensaje
    if (!tasks || tasks.length === 0) {
      return res.status(404).json({ message: 'No tasks found for this user' });
    }

    // Devolver las tareas encontradas
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};



// Actualizar una tarea
// controllers/taskController.js

exports.updateTask = async (req, res) => {
  try {
    // Buscar la tarea usando el campo `customId` (si ese es el identificador correcto)
    const task = await Task.findOne({ customId: req.params.customId });
    if (!task) return res.status(404).json({ message: 'Task not found' });

    // Actualizar los campos, preservando los valores existentes si no se envían nuevos
    task.title = req.body.title || task.title;
    task.description = req.body.description || task.description;
    task.status = req.body.status || task.status;
    task.assignedTo = req.body.assignedTo || task.assignedTo; // Actualizar asignado
    task.category = req.body.category || task.category;
    task.deadline = req.body.deadline ? new Date(req.body.deadline).toISOString() : task.deadline;

    // Guardar los cambios
    const updatedTask = await task.save();

    return res.status(200).json(updatedTask);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error updating task" });
  }
};


    res.json(updatedTask);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


// Eliminar una tarea
exports.deleteTask = async (req, res) => {
  try {
    const task = await Task.findOne({ id: req.params.id });
    if (!task) return res.status(404).json({ message: 'Task not found' });

    // Verificar si el usuario está autorizado a eliminar la tarea
    if (task.creator.toString() !== req.user.id) {
      return res.status(403).json({ message: 'Unauthorized' });
    }

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
