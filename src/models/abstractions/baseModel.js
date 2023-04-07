const { Model } = require("sequelize");

class BaseModel extends Model {

    static async _findAndCountAll(filter, range, sort) {
        console.log('sorting: ', sort);
        try {
            const data = await this.findAndCountAll({
                where: filter,
                offset: range[0],
                limit: range[1],
                order: [sort],

            });
            return data;
        } catch (e) {
            console.log(e.message);
        }
    }

    static async _findAll(attributes, filters) {
        try {
            const entities = await this.findAll({ attributes, where: filters, });
            if (entities) {
                return entities.map(entity => entity.dataValues);
            }
            return [];
        } catch (e) {
            console.log(e.message);
        }
    }

    static async _findOne(attributes, filters) {
        const entity = await this.findOne({ attributes, where: filters });
        return entity ? entity.dataValues : null;
    }

    static async addOne(entity) {
        const createdEntity = await this.create(entity);
        return createdEntity.dataValues;
    }

    static async addMany(entities) {
        const createdEntities = [];
        for (const entity of entities) {
            const createdEntity = await this.create(entity);
            createdEntities.push(createdEntity.dataValues);
        }
        return createdEntities;
    }

    static async _delete(filters) {
        const numDeletedEntities = await this.destroy({ where: filters });
        return numDeletedEntities;
    }
}

module.exports = BaseModel;