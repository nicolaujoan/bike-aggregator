const BikeRepository = require('../../src/repositories/bikeRepository');
const Bike = require('../../src/models/bike');

describe('Adding bikes to a shop for renting them', () => {
    let bikeRepository;
    let testHelper;

    beforeAll(() => {
        bikeRepository = new BikeRepository(Bike);
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

        const addedBike = await bikeRepository.addOne(bikeData);
        expect(addedBike).toStrictEqual({ id: 11, ...bikeData });
    });
});