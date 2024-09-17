const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
const authenticateUser = require('../middleware/authMiddleware');
const categoryController = require('../controllers/categoryController');


// Definir rutas y asociarlas a las funciones del controlador
router.get('/tasks', authenticateUser, taskController.getTasksForUser); // Muestra las tareas del usuario autenticado
router.post('/tasks', authenticateUser, taskController.createTask);
router.patch('/tasks/:id', authenticateUser, taskController.updateTask);
router.delete('/tasks/:id', authenticateUser, taskController.deleteTask);
// Nueva ruta para obtener tareas por ID de usuario (requiere autenticación)
router.get('/tasks/user/:id', authenticateUser, taskController.getTasksByUserId); // Obtiene las tareas asignadas a un usuario por su ID

// Rutas para las categorías
router.get('/categories', categoryController.getCategories);
router.post('/categories', categoryController.createCategory);
router.patch('/categories/:id', categoryController.updateCategory);


module.exports = router;
