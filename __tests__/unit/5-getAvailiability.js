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
        const shops = await Repo.findShopsByBike(bikeFilter, shopAttributes);

        const expectedShops = [{ id: 2, name: "Mike's Bike Shop" }, { id: 3, name: "Sue's Bike Shop" }]

        expect(shops.length).toBe(2);
        expect(shops).toStrictEqual(expectedShops);
    });

    test('get all shops that has a bike by bike id', async () => {
        const bikeFilter = { id: 2 };  // 1, 3, 5
        const shopAttributes = ['id', 'name'];
        const shops = await Repo.findShopsByBike(bikeFilter, shopAttributes);

        const expectedShops = [
            {id: 1, name: "John's Bike Shop"},
            {id: 3, name: "Sue's Bike Shop"},
            {id: 5, name: "Ann's Bike Shop"}
        ];

        expect(shops.length).toBe(3);
        expect(shops).toStrictEqual(expectedShops);
    });

    test('get an empty array when passing filters of an inexistent bike', async () => {
        const bikeFilter = {brand: 'Cannondale', model: 'Scalpel'};
        let shopAttributes;
        
        const shops = await Repo.findShopsByBike(bikeFilter, shopAttributes);
        expect(shops.length).toBeFalsy();
        expect(shops).toStrictEqual([]);
    });

    test('get all bikes of a given shop with some filters', async () => {
        const shopFilter = {name: "John's Bike Shop"};
        const bikeAttributes = ['id', 'msrp', 'brand', 'model'];
        const bikes = await Repo.findBikesByShop(shopFilter, bikeAttributes);

        const expectedBikes = [
            {id: 1, msrp: '$1,999.99', brand: 'Trek', model: 'Emonda'},
            {id: 2, msrp: '$1,499.99', brand: 'Giant', model: 'Reign'},
            {id: 7, msrp: '$699.99', brand: 'Trek', model: 'Dual Sport'}
        ];

        expect(bikes.length).toBeTruthy();
        expect(bikes).toStrictEqual(expectedBikes);
    });

    test('get all bikes that has a shop by shop id', async () => {
        const shopFilter = {id: 4};
        const bikeAttributes = ['id', 'msrp', 'brand', 'model'];
        const bikes = await Repo.findBikesByShop(shopFilter, bikeAttributes);

        const expectedBikes = [{id: 10, msrp: '$2,199.99', brand: 'Scott', model: 'Scale'}];

        expect(bikes.length).toBe(expectedBikes.length);
        expect(bikes).toStrictEqual(expectedBikes);
    });

    test('get an empty array when passing filters of an inexistent shop', async () => {
        const shopFilter = {name: 'MegaRaw Bikes'};
        const bikes = await Repo.findBikesByShop(shopFilter);

        expect(bikes.length).toBeFalsy();
        expect(bikes).toStrictEqual([]);
    }); 
});