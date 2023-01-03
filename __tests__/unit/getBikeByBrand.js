const {sequelize, connect} = require('../../config/db/sequelize');
const BikeRepository = require('../../src/repositories/bikeRepository');
const Bike = require('../../src/models/bike');

describe('get some bikes by its brand', () => {

    let Repo;
    
    beforeAll(() => {
        connect();
        Repo = new BikeRepository(Bike);
    });

    test('get bike of "Trek" brand', async () => {
        const result = await Repo.findByBrand('Trek');
        console.log(result);
        expect(result.brand).toBe('Trek');
    });

    afterAll(() => {
        sequelize.close();
    })
})