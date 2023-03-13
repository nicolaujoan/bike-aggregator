const { DataTypes } = require('sequelize');
const BaseModel = require('./abstractions/baseModel');
const Category = require('./category');
const { sequelize } = require('../../config/db/sequelize');

class Bike extends BaseModel {}

Bike.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },

  msrp: {
    type: DataTypes.TEXT,
    allowNull: false
  },

  category_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Category,
      key: 'id'
    }
  },

  brand: {
    type: DataTypes.TEXT,
    allowNull: false
  },

  model: {
    type: DataTypes.TEXT,
    allowNull: false
  },

  weight: {
    type: DataTypes.TEXT,
  },

  suspension: {
    type: DataTypes.TEXT,
    allowNull: false
  },

  travel: {
    type: DataTypes.TEXT
  },

  frame: {
    type: DataTypes.TEXT,
    allowNull: false
  },

  fork: {
    type: DataTypes.TEXT,
    allowNull: false
  },

  wheels: {
    type: DataTypes.TEXT,
    allowNull: false
  },

  drive_train: {
    type: DataTypes.TEXT
  },

  groupset: {
    type: DataTypes.TEXT
  },

  brakes: {
    type: DataTypes.TEXT,
    allowNull: false
  },

  seatpost: {
    type: DataTypes.TEXT
  },

  image: {
    type: DataTypes.TEXT('long'),
  }

}, { sequelize, tableName: 'bikes', timestamps: true, createdAt: false, updatedAt: false });

module.exports = Bike;
