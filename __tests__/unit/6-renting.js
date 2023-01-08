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
});