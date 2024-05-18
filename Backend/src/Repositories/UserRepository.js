const User  = require('../db/Models/userModel');
    
class UserRepository { 
    async createUser(username, password, rol) {
        console.log("hola2")
        return await User.create({ username, password, rol });
    }
    
    async findUserByUsername(username) {
    return await User.findOne({ where: { username } });
    }
}

module.exports =  UserRepository;