const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../Config/config');

class Guion extends Model {}
Guion.init({

    Titulo:
    {
        type:DataTypes.STRING,
        allowNull: false
    },
    Genero:
    {
        type:DataTypes.STRING,
        allowNull: false
    }
},
{
    sequelize,
    modelName: 'Guion'
});

module.exports = Guion;
