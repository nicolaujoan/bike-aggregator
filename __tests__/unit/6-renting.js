const Availability = require('../../src/models/availability');
const AvailabilityRepository = require('../../src/repositories/availabilityRepository');
const cls = require('cls-hooked');

let transaction;  // Parent Transaction
let wrapperTransaction;  // For each nested transaction

// Create namespace
const namespace = cls.createNamespace('default-namespace');

const Sequelize = require('sequelize');
Sequelize.useCLS(namespace);

describe('renting use cases', () => {

    let availabilityRepository;

    beforeAll(async () => {
        availabilityRepository = new AvailabilityRepository(Availability);  // init the Repo

        // set up the transaction
        transaction = await Availability.sequelize.transaction({
            autocommit: false
        });

        // create a context and enter the context
        const context = namespace.createContext();
        namespace.enter(context);
        namespace.set('transaction', transaction);
    });

    // wrap each test in a nested transaction
    beforeEach(async () => {
        wrapperTransaction = await Availability.sequelize.transaction({
            autocommit: false,
            transaction
        });
    });

    // Rollback each nested transaction
    afterEach(async () => {
        await wrapperTransaction.rollback();
    });

    // Rollback the actual transaction
    afterAll(async () => {
        await transaction.rollback();
    });

    test('Rent the bike of id 1 for the shop of id 1 with in_stock of 5', async () => {
        const BIKE_ID = 1;
        const SHOP_ID = 1;
        const result = await availabilityRepository.rentBike(BIKE_ID, SHOP_ID);

        const expectedResult = {
            rented: true,
            currentStock: 4
        };

        expect(result).toStrictEqual(expectedResult);
    });

    test('Rent the bike of id 2 for the shop of id 3 and the try to rent the same but out of stock', async () => {
        const BIKE_ID = 2;
        const SHOP_ID = 3;
        await availabilityRepository.rentBike(BIKE_ID, SHOP_ID);
        const result = await availabilityRepository.rentBike(BIKE_ID, SHOP_ID);

        const expectedResult = {
            rented: false,
            currentStock: 0
        };

        expect(result).toStrictEqual(expectedResult);
    });

    test('Return the bike of id 8 from the shop of id 2 which had stock 7, now have stock of 8', async () => {
        const BIKE_ID = 8;
        const SHOP_ID = 2;
        const result = await availabilityRepository.returnBike(BIKE_ID, SHOP_ID);

        const expectedResult = {
            returned: true,
            currentStock: 8
        };

        expect(result).toStrictEqual(expectedResult);
    });

    test('Return the bike of id 13 from the shop of id 1 should receive a null value', async () => {
        const BIKE_ID = 13;
        const SHOP_ID = 1;
        const result = await availabilityRepository.returnBike(BIKE_ID, SHOP_ID);

        expect(result).toBeNull();
    });
});