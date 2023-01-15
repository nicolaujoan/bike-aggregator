const { DataTypes, Op } = require('sequelize');
const { sequelize } = require('../../config/db/sequelize');
const BaseModel = require('./abstractions/baseModel');

class Category extends BaseModel {

    static async findOneById(id) {
        let category = await this.findByPk(id);
        category = category ? category.dataValues : null;

        if (category) {

            if (!category.parent_id) {
                let { parent_id, ...categoryDTO } = category;
                return categoryDTO;
            }
        }
        return category;
    }

    static async findAllParentCategories() {
        const filters = {
            parent_id: {
                [Op.is]: null
            }
        }
        const categories = await this.findAll({where: filters});

        if (categories) {
            return categories.map(category => {
                category = category.dataValues;
                let { parent_id, ...categoryDTO } = category;
                return categoryDTO;
            });
        }
        return [];
    }

    static async findAllSubcategories() {
        const filters = {
            parent_id: {
                [Op.not]: null
            }
        };

        const subcategories = await this.findAll({where: filters});

        if (subcategories) {
            return subcategories.map(subcategory => subcategory.dataValues);
        }
        return [];
    }
};

Category.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
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