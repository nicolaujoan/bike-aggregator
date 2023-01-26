const BikeRepository = require('../../src/repositories/bikeRepository');
const Bike = require('../../src/models/bike');

describe('get some bikes', () => {

    let Repo;

    beforeAll(() => {
        Repo = new BikeRepository(Bike);
    });

    test('get all the bikes in our system', () => {
        const bikes = Repo.findAll();
        return bikes.then(result => expect(result.length).toBe(10));
    });

    test('get a single bike in our system but specify attributes and filters', async () => {
        const attributes = ['id', 'msrp', 'brand', 'model'];
        const filters = { brand: 'Giant', model: 'TCR' };

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
        const result = Repo.findOne(undefined, { brand: 'Trek' });
        return result
            .then(result => expect(result.brand).toBe('Trek'));
    });

    test('get a bike of an inexistent brand', () => {
        const result = Repo.findOne(undefined, { brand: 'Meesek' });
        return result
            .then(result => expect(result).toBeNull());
    });

    test('get bike of brand "Specialized"', async () => {
        const result = await Repo.findAll(undefined, { brand: 'Specialized' });
        expect(result.length).toBe(3);
    });

    test('get some bikes of an inexistent brand', async () => {
        const result = await Repo.findAll(undefined, { brand: 'Elegant' });
        expect(result).toStrictEqual([]);
    })
});