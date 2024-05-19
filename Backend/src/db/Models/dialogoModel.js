const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../Config/config');
const Escena = require('./escenaModel');
const Actor = require('./actorModel');

class Dialogo extends Model {}
Dialogo.init({
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
    },
    emocion: {
        type: DataTypes.TEXT,
        allowNull: true
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
    },
    
}, {
    sequelize,
    modelName: 'Dialogo'
});


Dialogo.belongsTo(Escena, {
    onDelete: 'CASCADE'
});
Dialogo.belongsTo(Actor, {
    onDelete: 'CASCADE'
});

module.exports = Dialogo;
