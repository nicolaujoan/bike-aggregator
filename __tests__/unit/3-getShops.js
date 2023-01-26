const Shop = require('../../src/models/shop');
const ShopRepository = require('../../src/repositories/shopRepository');

describe('get some shops', () => {

    let Repo;

    beforeAll(() => {
        Repo = new ShopRepository(Shop);
    });

    test('get all shops in the system', async () => {
        const shops = await Repo.findAll();
        expect(shops.length).toBe(5);
    });

    test('get shop services details given the shop name', async () => {
        const SHOP_NAME = "John's Bike Shop";
        const shopDetails = await Repo.findOne(['id', 'name', 'services'], {name: SHOP_NAME});

        const expectedObject = {
            id: 1,
            name: SHOP_NAME,
            services: 'Bike Sales, Repairs, Tune-ups, Rentals'
        };

        expect(shopDetails).toStrictEqual(expectedObject);
    });

    test('get a null reference when request services details of an inexistent shop', async () => {
        const SHOP_NAME = 'Bicicletes can Sancho';
        const shopDetails = await Repo.findOne(undefined, {name: SHOP_NAME});

        expect(shopDetails).toBeNull();
    });
});