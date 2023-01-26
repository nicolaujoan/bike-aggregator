const { sequelize } = require('../config/db/sequelize');

function TestHelper(model, sqlString) {
    this.model = model;
    this.sqlString = sqlString;
}

TestHelper.prototype.deleteData = async function () {
    await this.model.destroy({ where: {} });
}

TestHelper.prototype.addData = async function () {
    await sequelize.query(this.sqlString);
}

module.exports = TestHelper;

