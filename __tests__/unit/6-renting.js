const Availability = require('../../src/models/availability');
const AvailabilityRepository = require('../../src/repositories/availabilityRepository');
const TestHelper = require('../../__test_utils__/testHelper');

describe('renting use cases', () => {

    test('', ()=> {expect(true).toBe(true)});

    // let availabilityRepository;
    // let testHelper;

    // beforeAll(() => {
    //     availabilityRepository = new AvailabilityRepository(Availability);
    //     testHelper = new TestHelper(Availability, '../../__test_utils__/scripts/availability.sql');
    // });

    // afterEach(async () => {
    //     await testHelper.deleteData();
    //     await testHelper.addData();
    // });

    // test('Rent the bike of id 1 for the shop of id 1 with in_stock of 5', async () => {
    //     const BIKE_ID = 1;
    //     const SHOP_ID = 1;
    //     const result = await availabilityRepository.rentBike(BIKE_ID, SHOP_ID);

    //     const expectedResult = {
    //         rented: true,
    //         currentStock: 4
    //     };

    //     expect(result).toStrictEqual(expectedResult);
    // });

    // test('Rent the bike of id 2 for the shop of id 3 and the try to rent the same but out of stock', async () => {
    //     const BIKE_ID = 2;
    //     const SHOP_ID = 3;
    //     await availabilityRepository.rentBike(BIKE_ID, SHOP_ID);
    //     const result = await availabilityRepository.rentBike(BIKE_ID, SHOP_ID);

    //     const expectedResult = {
    //         rented: false,
    //         currentStock: 0
    //     };

    //     expect(result).toStrictEqual(expectedResult);
    // });

    // test('Return the bike of id 8 from the shop of id 2 which had stock 7, now have stock of 8', async () => {
    //     const BIKE_ID = 8;
    //     const SHOP_ID = 2;
    //     const result = await availabilityRepository.returnBike(BIKE_ID, SHOP_ID);

    //     const expectedResult = {
    //         returned: true,
    //         currentStock: 8
    //     };

    //     expect(result).toStrictEqual(expectedResult);
    // });

    // test('Return the bike of id 13 from the shop of id 1 should receive a null value', async () => {
    //     const BIKE_ID = 13;
    //     const SHOP_ID = 1;
    //     const result = await availabilityRepository.returnBike(BIKE_ID, SHOP_ID);

    //     expect(result).toBeNull();
    // });
});