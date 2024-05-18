const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../Config/config');
const Escena = require('./escenaModel');
const Actor = require('./actorModel');

class PoseActor extends Model {}
PoseActor.init({
    pose: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'PoseActor'
});

PoseActor.belongsTo(Escena);
PoseActor.belongsTo(Actor);

module.exports = PoseActor;
