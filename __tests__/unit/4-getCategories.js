const Category = require('../../src/models/category');
const CategoryRepository = require('../../src/repositories/categoryRepository');

describe('Get some categories', () => {

    let Repo;

    const DB_CATEGORIES = [
        { id: 1, name: 'Road', type: 'Road Bike' },
        { id: 2, name: 'Mountain', type: 'Mountain Bike' },
        { id: 3, name: 'Hybrid', type: 'Hybrid Bike' },
        { id: 4, name: 'Trail', type: 'Mountain Bike' },
        { id: 5, name: 'Enduro', type: 'Mountain Bike' },
        { id: 6, name: 'Downhill', type: 'Mountain Bike' },
        { id: 7, name: 'Touring', type: 'Road Bike' },
        { id: 8, name: 'Cyclocross', type: 'Road Bike' },
        { id: 9, name: 'Commuter', type: 'Hybrid Bike' },
        { id: 10, name: 'Hardtail', type: 'Mountain Bike' },
        { id: 11, name: 'Full Suspension', type: 'Mountain Bike' },
    ]

    beforeAll(() => {
        Repo = new CategoryRepository(Category);
    });

    test('get all categories and subcategories in the system', async () => {
        const categories = await Repo.findAll();

        expect(categories).toStrictEqual(DB_CATEGORIES);
    });

    test('get a single category by its id', async () => {
        const id = 2;
        const expectedCategory = {
            id,
            name: 'Mountain',
            type: 'Mountain Bike'
        };

        const category = await Repo.findOneById(id);
        expect(category).toStrictEqual(expectedCategory);
    });

    test('get a single subcategory by its id', async () => {
        const id = 10;
        const expectedCategory = {
            id,
            name: 'Hardtail',
            type: 'Mountain Bike',
            parent_id: 2
        };

        const category = await Repo.findOneById(id);
        expect(category).toStrictEqual(expectedCategory);
    });

    test('get all subcategories in the system', async () => {
        const EXPECTED_LENGTH = 5;

        const subcategories = await Repo.findAllSubcategories();
        expect(subcategories.length).toBe(EXPECTED_LENGTH);
    });

    test('get all categories in the system', async () => {
        const EXPECTED_LENGTH = 6;

        const categories = await Repo.findAllParentCategories();
        expect(categories.length).toBe(EXPECTED_LENGTH);
    })
});

