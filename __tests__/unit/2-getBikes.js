const { connect } = require('../../config/db/sequelize');
const BikeRepository = require('../../src/repositories/bikeRepository');
const Bike = require('../../src/models/bike');

describe('get some bikes by its brand', () => {

    let Repo;

    beforeAll(() => {
        const isConnected = connect();
        Repo = new BikeRepository(Bike);
        return isConnected.then(value => value);
    });

    test('get all the bikes in our system', () => {
        const bikes = Repo.findAll();
        return bikes.then(result => expect(result.length).toBe(10));
    });

    test('get all the bikes in our system but specify attributes and filters', async () => {
        const attributes = ['id', 'msrp', 'brand', 'model'];
        const filters = {brand: 'Giant', model: 'TCR'};
        
        const expectedBike = {
            id: 6,
            msrp: '$1,799.99',
            brand: 'Giant',
            model: 'TCR'
        };

        const bike = await Repo.findOne(attributes, filters);
        expect(bike).toStrictEqual(expectedBike);
    });

    test('get bike of "Trek" brand', () => {
        const result = Repo.findOneByBrand('Trek');
        return result
            .then(result => expect(result.brand).toBe('Trek'));
    });

    test('get a bike of an inexistent brand', () => {
        const result = Repo.findOneByBrand('Meeseek');
        return result
            .then(result => expect(result).toBeNull());
    });

    test('get bike of brand "Specialized"', async () => {
        const result = await Repo.findManyByBrand('Specialized');
        expect(result.length).toBe(3);
    });

    test('get some bikes of an inexistent brand', async () => {
        const result = await Repo.findManyByBrand('Box');
        expect(result).toStrictEqual([]);
    })
});