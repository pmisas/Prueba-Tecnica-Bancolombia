const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../Config/config');
const Escena = require('./escenaModel');
const Actor = require('./actorModel');

class UbicacionActor extends Model {}
UbicacionActor.init({
    coordenadaX: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    coordenadaY: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    coordenadaZ: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    rotacionX: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    rotacionY: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    rotacionZ: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    EscenaId: { 
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Actor, 
            key: 'id' 
        }
    },
    ActorId: { 
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Escena, 
            key: 'id' 
        }
    }
}, {
    sequelize,
    modelName: 'UbicacionActor'
});

/*
UbicacionActor.belongsTo(Escena);
UbicacionActor.belongsTo(Actor);
*/

module.exports = UbicacionActor;
