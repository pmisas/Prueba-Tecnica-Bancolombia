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
      if (!user) throw new Error('Usuario no encontrado');
      
      const isValidPassword = await bcrypt.compare(password, user.password);
      if (!isValidPassword) throw new Error('Contraseña incorrecta');
  
      const token = jwt.sign({ userId: user.id, role: user.rol, username: user.username }, process.env.JWT_SECRET, { expiresIn: '1d' });
      return token;
  }
}

module.exports = UserService;
