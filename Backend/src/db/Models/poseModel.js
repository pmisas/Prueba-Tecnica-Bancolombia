const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../Config/config');
const Escena = require('./escenaModel');
const Actor = require('./actorModel');

class PoseActor extends Model {}
PoseActor.init({
    pose: {
        type: DataTypes.STRING,
        allowNull: false
    },
    EscenaId: { 
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Escena, 
            key: 'id' 
        }
    },
    ActorId: { 
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Actor, 
            key: 'id' 
        }
    },
    orden: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'PoseActor'
});


PoseActor.belongsTo(Escena, {
    onDelete: 'CASCADE'
});
PoseActor.belongsTo(Actor, {
    onDelete: 'CASCADE'
});


module.exports = PoseActor;
