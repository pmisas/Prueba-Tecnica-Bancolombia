const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../Config/config');

class AuditLog extends Model {}

AuditLog.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  tableName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  operation: {
    type: DataTypes.STRING,
    allowNull: false
  },
  timestamp: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  scriptId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'AuditLog',
  timestamps: false
});

module.exports = AuditLog;
