const Task = require('../models/taskModel');

// Obtener todas las tareas
exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Crear una nueva tarea
exports.createTask = async (req, res) => {
  try {
    const { title, status, createdBy } = req.body;

    // Validación básica
    if (!title || !createdBy) {
      return res.status(400).json({ message: "Title and Admin are required" });
    }

    // Creación de la nueva tarea
    const newTask = new Task({
      title,
      status: status || 'ongoing', // Estado por defecto
      createdBy, // El nombre del administrador que crea la tarea
    });

    // Guardar en la base de datos
    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ message: "Error creating task", error });
  }
};
// Actualizar una tarea
exports.updateTask = async (req, res) => {
  try {
    const task = await Task.findOne({ id: req.params.id });
    if (!task) return res.status(404).json({ message: 'Task not found' });

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
    console.log(req.params.id);
    const task = await Task.findOne({ id: req.params.id });
    if (!task) return res.status(404).json({ message: 'Task not found' });
    console.log(task);
    await Task.deleteOne({ id: req.params.id });
    res.json({ message: 'Task deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
