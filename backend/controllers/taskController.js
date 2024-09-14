const Task = require('../models/taskModel');
const User = require('../models/userModel');

// Crear una nueva tarea
exports.createTask = async (req, res) => {
  try {
    const lastTask = await Task.findOne().sort({ id: -1 });
    const newId = lastTask ? lastTask.id + 1 : 1;

    const task = new Task({
      id: newId,
      title: req.body.title,
      description: req.body.description,
      status: req.body.status || 'ongoing',
      assignedTo: req.body.assignedTo, // Asignar la tarea a un usuario específico
      creator: req.user.id // Establecer el creador de la tarea al usuario autenticado
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
    const tasks = await Task.find({ creator: userId }); // Filtrar tareas por creador
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Actualizar una tarea
exports.updateTask = async (req, res) => {
  try {
    const task = await Task.findOne({ id: req.params.id });
    if (!task) return res.status(404).json({ message: 'Task not found' });

    // Verificar si el usuario está autorizado a actualizar la tarea
    if (task.creator.toString() !== req.user.id) {
      return res.status(403).json({ message: 'Unauthorized' });
    }

    task.title = req.body.title || task.title;
    task.description = req.body.description || task.description;
    task.status = req.body.status || task.status;

    const updatedTask = await task.save();
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
};
