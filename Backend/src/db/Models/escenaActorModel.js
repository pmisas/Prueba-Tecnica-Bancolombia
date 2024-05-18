const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../Config/config');
const Actor = require('./actorModel');

class EscenaActor extends Model {}
EscenaActor.init({
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
    }
}, {
    sequelize,
    modelName: 'EscenaActor'
});


EscenaActor.belongsTo(Escena, { onDelete: 'CASCADE' });

EscenaActor.belongsTo(Actor, { onDelete: 'CASCADE' });


module.exports = EscenaActor;
