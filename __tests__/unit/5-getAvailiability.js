const Availability = require('../../src/models/availability');
const AvailabilityRepository = require('../../src/repositories/availabilityRepository');
const util = require('util');

describe('get some availability', () => {

    let Repo;

    beforeAll(() => {
        Repo = new AvailabilityRepository(Availability);
    })

    test('get all bike and shop from an availability, for all the availabilities', async () => {
        const availability = await Repo.findAll();
        // fancy console.log
        // console.log(util.inspect(availability, {showHidden: false, depth: null, colors: true}));
        expect(availability.length).toBe(10);
    });


    test('get all shops that has a bike with some filters (brand = Specialized)', async () => {
        const bikeFilter = { brand: 'Specialized' }
        const shopAttributes = ['id', 'name'];
        const shops = await Repo.findShopsByBike(shopAttributes, bikeFilter);

        const expectedShops = [{ id: 2, name: "Mike's Bike Shop" }, { id: 3, name: "Sue's Bike Shop" }]

        expect(shops.length).toBe(2);
        expect(shops).toStrictEqual(expectedShops);
    });

    // test('get all shops that has a bike by bike id', async () => {

    // });

    // test('get all bikes of a given shop with some filters', async () => {

    // });

    // test('get all bikes that has a shop by shop id', async () => {

    // });
});