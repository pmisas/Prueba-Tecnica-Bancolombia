const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../Config/config');
const Guion = require('./guionModel');
const Actor = require('./actorModel');

class Escena extends Model {}
Escena.init({
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    GuionId: { 
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: Guion, 
            key: 'id' 
        }
    },
    orden: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
}, {
    sequelize,
    modelName: 'Escena'
});


Escena.belongsTo(Guion, { onDelete: 'CASCADE' });
//Escena.belongsToMany(Actor, { through: 'EscenaActor' });


module.exports = Escena;
