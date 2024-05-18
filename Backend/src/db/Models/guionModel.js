const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../Config/config');
const Usuario = require('./userModel');

class Guion extends Model {}
Guion.init({
    Titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Genero: {
        type: DataTypes.STRING,
        allowNull: false
    },
    GuionistaId: { 
        type: DataTypes.INTEGER,
        allowNull: false,
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
