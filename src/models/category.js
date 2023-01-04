const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../../config/db/sequelize');

class Category extends Model { };

Category.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },

    name: {
        type: DataTypes.TEXT,
        allowNull: false
    },

    type: {
        type: DataTypes.TEXT,
        allowNull: false
    },

    parent_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Category,
            key: 'id'
        }
    }

}, { sequelize, tableName: 'categories', timestamps: true, createdAt: false, updatedAt: false });

module.exports = Category;