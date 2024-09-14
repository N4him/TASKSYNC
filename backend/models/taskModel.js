const mongoose = require('mongoose');

// Añadir el campo `id` único y ascendente
const taskSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true,
    index: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  status: {
    type: String,
    enum: ['ongoing', 'finished'],
    default: 'ongoing',
  },
  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Referencia al modelo User
  },
});

// Middleware para asignar un ID único y ascendente antes de guardar la tarea
taskSchema.pre('save', async function (next) {
  if (this.isNew) {
    const lastTask = await this.constructor.findOne().sort({ id: -1 });
    this.id = lastTask ? lastTask.id + 1 : 1;
  }
  next();
});

module.exports = mongoose.model('Task', taskSchema);
