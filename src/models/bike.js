const { DataTypes, Model } = require('sequelize');
const Category = require('./category');
const { sequelize } = require('../../config/db/sequelize');

class Bike extends Model {

  static async _findAll(attributes, filters) {
    const bikes = await this.findAll({attributes, where: filters});
    if (bikes) {
      return bikes.map(bike => bike.dataValues);
    }
    return [];
  }

  static async _findOne(attributes, filters) {
    const bike = await this.findOne({attributes, where: filters});
    return bike ? bike.dataValues : null;
  }

  static async addOne(bike) {
    const createdBike = await this.create(bike);
    return createdBike.dataValues;
  }

  static async addMany(bikes) {
    const createdBikes = [];
    for (const bike of bikes) {
      const createdBike = await this.create(bike);
      createdBikes.push(createdBike.dataValues);
    }
    return createdBikes;
  }

  static async _delete (filters) {
      const numDeletedBikes = await this.destroy({where: filters});
      return numDeletedBikes;
  }

  create() {
    this.save();
  }

  getIdAndBrand() {
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
  }

}, { sequelize, tableName: 'bikes', timestamps: true, createdAt: false, updatedAt: false });

module.exports = Bike;
