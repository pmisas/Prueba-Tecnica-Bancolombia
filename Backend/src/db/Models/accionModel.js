const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../Config/config');
const Escena = require('./escenaModel');

class Accion extends Model {}
Accion.init({
    texto: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    EscenaId: { 
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Escena, 
            key: 'id'
        }
    }
}, {
    sequelize,
    modelName: 'Accion'
});

Accion.belongsTo(Escena, { onDelete: 'CASCADE' });

module.exports = Accion;
