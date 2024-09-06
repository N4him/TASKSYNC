const User = require('../models/userModel');
const bcrypt = require('bcryptjs');

exports.createUser = async (req, res) => {
  const { email, password, name } = req.body;

  try {
    // Verificar si el usuario ya existe
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'El usuario ya existe' });
    }

    // Encriptar la contraseña
    const salt = await bcrypt.genSalt(10); // Generar un salt
    const hashedPassword = await bcrypt.hash(password, salt); // Hashear la contraseña

    // Crear un nuevo usuario con la contraseña hasheada
    user = new User({
      email,
      password: hashedPassword, // Guardar la contraseña hasheada
      name,
    });

    // Guardar el usuario en la base de datos
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
    // Buscar usuario por email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    // Verificar la contraseña usando bcrypt
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: 'Contraseña incorrecta' });
    }

    // Si el usuario y contraseña son correctos, devolver los datos del usuario
    res.status(200).json({
      id: user._id,
      email: user.email,
      username: user.username,
    });

  } catch (error) {
    res.status(500).json({ message: 'Error del servidor', error: error.message });
  }
}
