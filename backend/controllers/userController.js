const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken'); // Asegúrate de haber instalado el paquete 'jsonwebtoken'

exports.createUser = async (req, res) => {
  const { email, password, name, role } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'El usuario ya existe' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    user = new User({
      email,
      password: hashedPassword,
      name,
      role,
    });

    await user.save();

    res.status(201).json({ message: 'Usuario registrado con éxito' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error del servidor' });
  }
}

exports.getUsers = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: 'Contraseña incorrecta' });
    }

    // Generar un token JWT
    const token = jwt.sign(
      { id: user._id, email: user.email, role: user.role },
      'secretKey', // Reemplaza con tu clave secreta
      { expiresIn: '1h' } // El token expira en 1 hora, ajusta según necesites
    );

    res.status(200).json({
      token,
      id: user._id,
      email: user.email,
      role: user.role,
    });

  } catch (error) {
    res.status(500).json({ message: 'Error del servidor', error: error.message });
  }
}
