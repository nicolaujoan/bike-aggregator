const BikeRepository = require('../../src/repositories/bikeRepository');
const Bike = require('../../src/models/bike');
const cls = require('cls-hooked');

let transaction;  // Parent Transaction
let wrapperTransaction;  // For each nested transaction

// Create namespace
const namespace = cls.createNamespace('default-namespace');

// use namespace
const Sequelize = require('sequelize');
Sequelize.useCLS(namespace);

describe('Adding bikes to a shop for renting them', () => {

    let bikeRepository;

    beforeAll(async () => {
        bikeRepository = new BikeRepository(Bike);

        // set up the transaction
        transaction = await Bike.sequelize.transaction({
            autocommit: false
        });

        // create a context and enter the context
        const context = namespace.createContext();
        namespace.enter(context);
        namespace.set('transaction', transaction);
    });

    beforeEach(async () => {
        wrapperTransaction = await Bike.sequelize.transaction({
            autocommit: false,
            transaction
        });
    });

    afterEach(async () => {
        await wrapperTransaction.rollback();
    });

    afterAll(async () => {
        await transaction.rollback();
    });

    test('Add a new bike to the System', async () => {

        const bikeData = {
            msrp: '$1,999.99',
            category_id: 1,
            brand: 'Trek',
            model: 'Ultimate 3n',
            weight: '15 lbs',
            suspension: 'Full suspension',
            travel: '95 mm',
            frame: 'Carbon fiber',
            fork: 'Fox',
            wheels: 'pro x 3',
            drive_train: 'Shimano Ultegra',
            groupset: 'ultra fresh',
            brakes: 'lightweight',
            seatpost: 'Fischer'
        }

        const addedBike = await bikeRepository.addBike(bikeData);
        expect(addedBike).toStrictEqual({ id: 11, ...bikeData });
    });
});