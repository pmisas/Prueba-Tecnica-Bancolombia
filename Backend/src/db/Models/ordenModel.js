const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../Config/config');
const Guion = require('./guionModel');
const Actor = require('./actorModel');

class Orden extends Model {}
Orden.init({
    Escena: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.TEXT,
        allowNull: true
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
    modelName: 'Escena'
});


Escena.belongsTo(Guion, { onDelete: 'CASCADE' });
//Escena.belongsToMany(Actor, { through: 'EscenaActor' });


module.exports = Escena;
