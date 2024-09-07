const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const cors = require("cors");
const taskRoutes = require('./routes/taskRoutes');
const errorMiddleware = require('./middleware/errorMiddleware');
const { port } = require('./config/config');

const app = express();
app.use(cors({
  origin: "http://localhost:3000", // Permite solicitudes solo desde este origen
}));

// Connect to database
connectDB();

// Middleware
app.use(express.json());
app.use('/api/users', userRoutes);

// Routes
app.use('/api', userRoutes);
app.use('/api', taskRoutes);

// Error Handling Middleware
app.use(errorMiddleware);

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
