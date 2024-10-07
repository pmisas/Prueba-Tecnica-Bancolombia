const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const UserRepository = require('../Repositories/UserRepository');
const userRepository = new UserRepository();

class UserService {
  async registerUser(username, password, rol) {
    const hashedPassword = await bcrypt.hash(password, 10);
    await userRepository.createUser(username, hashedPassword, rol);
  }

  async loginUser(username, password) {
    const user = await userRepository.findUserByUsername(username);

    if (!user) {
      console.log('Error: Usuario no encontrado');
      throw new Error('Usuario no encontrado');
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      console.log('Error: Contraseña incorrecta');
      throw new Error('Contraseña incorrecta');
    }

    console.log('PASO: Usuario encontrado y contraseña válida');
    
    // Verifica si JWT_SECRET está definido
    if (!process.env.JWT_SECRET) {
      console.log('Error: JWT_SECRET no está definido');
      throw new Error('JWT_SECRET no está definido');
    }

    console.log('JWT_SECRET:', process.env.JWT_SECRET);

    // Intenta generar el token
    try {
      const token = jwt.sign(
        { userId: user.id, role: user.rol, username: user.username }, 
        process.env.JWT_SECRET, 
        { expiresIn: '1d' }
      );
      console.log('Token generado correctamente:', token);
      return token;
    } catch (error) {
      console.log('Error al generar el token:', error);
      throw new Error('Error al generar el token');
    }
  }
}

module.exports = UserService;
