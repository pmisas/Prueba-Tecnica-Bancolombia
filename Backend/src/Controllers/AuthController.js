const UserService = require('../Services/UserService')
const userService = new UserService();

class AuthController {
  async register(req, res) {
    const { username, password, rol } = req.body;
    try {
      await userService.registerUser(username, password, rol);
      res.status(201).json({ message: 'Usuario registrado con éxito' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al registrar el usuario' });
    }
  }

  async login(req, res) {
    const { username, password } = req.body;
    try {
      const token = await userService.loginUser(username, password);
      res.status(200).json({ message: 'Inicio de sesión exitoso', token });
    } catch (error) {
      console.error(error);
      res.status(400).json({ message: 'Credenciales incorrectas' });
    }
  }
}


module.exports = new AuthController() ;
