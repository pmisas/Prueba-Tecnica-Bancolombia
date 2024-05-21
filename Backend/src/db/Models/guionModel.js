const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../Config/config');
const Usuario = require('./userModel');

class Guion extends Model {}
Guion.init({
    Titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Descripcion: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [10, 130] 
        },
    },
    Genero: {
        type: DataTypes.STRING,
        allowNull: false
    },
    GuionistaId: { 
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: Usuario, 
            key: 'id' 
        }
    }
    
},
{
    sequelize,
    modelName: 'Guion'
});

/*
Guion.belongsTo(Usuario, {
    foreignKey: 'id',
    onDelete: 'CASCADE'
});
*/

module.exports = Guion;
