const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../Config/config');
const Guion = require('./guionModel')

class Actor extends Model {}
Actor.init({
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    GuionId: { 
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Guion, 
            key: 'id' 
        }
    }
}, {
    sequelize,
    modelName: 'Actor'
});


Actor.belongsTo(Guion, {
    onDelete: 'CASCADE'
});


module.exports = Actor;
