const { Model,  DataTypes } = require('sequelize');
const sequelize = require('../../Config/config');



const User = sequelize.define('User',
{ 
id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
},
username: {
    allowNull: false,
    type: DataTypes.STRING,
    validate: {
        len: [5, 30] 
    },
    unique: true
},
password: {
    allowNull: false,
    type: DataTypes.STRING
},
rol: {
    allowNull: false,
    type: DataTypes.STRING,
    validate: {
        isIn: [['guionista', 'usuario']]
    }
},
});


module.exports =  User ;