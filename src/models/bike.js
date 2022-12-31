const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../../config/db/sequelize');

class Bike extends Model {

  static async findByModel() {
    return await this.findOne({ where: { brand: 'specialized' } })
    .then(data => data.dataValues)
    .catch(e => console.log(e.message));
  }

  create() {
    this.save();
    console.log('A bike was saved to the database');
  }

  getIdPlusBrand() {
    return `id: ${this.id}, brand: ${this.brand}`;
  }
}

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
  }

}, { sequelize, tableName: 'bikes', timestamps: true, createdAt: false, updatedAt: false });

module.exports = Bike;
