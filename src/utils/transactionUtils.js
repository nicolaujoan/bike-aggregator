/**
 * This module is used to reuse transactions in the tests by passing this functions as callbacks to
 * the beforeAll, beforeEach, afterAll and afterEach used by Jest 
 */

function Transactional(model, contextName) {
    var NAMESPACE = 'default-namespace';
    const cls = require('cls-hooked');
    const Sequelize = require('sequelize');
    var namespace = cls.createNamespace(NAMESPACE);
    Sequelize.useCLS(namespace);
    var context;
    var wrapperTransaction;
    var transaction;

    async function beforeAllBase() {
        transaction = await model.sequelize.transaction({
            autocommit: false
        });

        context = namespace.createContext();
        namespace.enter(context);
        namespace.set(contextName, transaction);
    }

    async function beforeEachBase() {
        wrapperTransaction = await model.sequelize.transaction({
            autocommit: false,
            transaction
        });
    }

    async function afterEachBase() {
        await wrapperTransaction.rollback();
    }

    async function afterAllBase() {
        await transaction.rollback();
    }

    return {
        beforeAllBase, 
        beforeEachBase,
        afterEachBase,
        afterAllBase
    }
};

module.exports = Transactional;
