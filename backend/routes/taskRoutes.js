const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
const authenticateUser = require('../middleware/authMiddleware');

// Definir rutas y asociarlas a las funciones del controlador
router.get('/tasks', authenticateUser, taskController.getTasksForUser); // Solo muestra tareas asignadas al usuario autenticado
router.post('/tasks', authenticateUser, taskController.createTask);
router.patch('/tasks/:id', authenticateUser, taskController.updateTask);
router.delete('/tasks/:id', authenticateUser, taskController.deleteTask);

module.exports = router;
