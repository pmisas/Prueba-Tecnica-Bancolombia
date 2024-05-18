
const UserService = require('../Services/UserService')
const userService = new UserService();

class UserController {

  async getUser(req, res){
    try {
      const user = await userService.getUserById(req.user.userId);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
}

modules.exports = UserController;
