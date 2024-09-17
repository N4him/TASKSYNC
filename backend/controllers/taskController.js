const nodemailer = require('nodemailer');
const Task = require('../models/taskModel');
const User = require('../models/userModel');

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER, // usuario SMTP
    pass: process.env.SMTP_PASS  // contraseña SMTP
  }
});

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

    // Buscar el correo del usuario al que se ha asignado la tarea
    if (req.body.assignedTo) {
      const assignedUser = await User.findById(req.body.assignedTo);
      if (assignedUser && assignedUser.email) {
        // Preparar y enviar el correo
        const mailOptions = {
          from: process.env.SMTP_USER, // El correo desde el que se envía
          to: assignedUser.email, // El correo del usuario asignado
          subject: 'Nueva tarea asignada',
          text: `Hola ${assignedUser.name},\n\nSe te ha asignado una nueva tarea: "${task.title}".\nDescripción: ${task.description}\n\nSaludos,\nEquipo de TaskMaster`,
        };

        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.error('Error al enviar el correo:', error);
          } else {
            console.log('Correo enviado: ' + info.response);
          }
        });
      }
    }

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
    const task = await Task.findOne({ id: req.params.id });
    if (!task) return res.status(404).json({ message: 'Task not found' });
    
    task.title = req.body.title || task.title;
    task.description = req.body.description || task.description;
    task.status = req.body.status || task.status;
    task.assignedTo = req.body.assignedTo || task.assignedTo; // Actualizar asignado

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
