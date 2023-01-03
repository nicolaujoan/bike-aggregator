const { sequelize, connect } = require('../../config/db/sequelize');
const BikeRepository = require('../../src/repositories/bikeRepository');
const Bike = require('../../src/models/bike');

describe('get some bikes by its brand', () => {

    let Repo;

    beforeAll(() => {
        const isConnected = connect();
        Repo = new BikeRepository(Bike);
        return isConnected.then(value => value);
    });

    test('get bike of "Trek" brand', () => {
        const result = Repo.findByBrand('Trek');
        return result
            .then(result => expect(result.brand).toBe('Trek'));
    });
})