/**
 * This module is used to reuse transactions in the tests by passing this functions as callbacks to
 * the beforeAll, beforeEach, afterAll and afterEach used by Jest 
 */

const cls = require('cls-hooked');

const transactionUtils = function (model, theNamespace, theContext) {

    let transaction;  // Parent Transaction
    let wrapperTransaction;  // For each nested transaction

    // Create namespace
    const namespace = cls.createNamespace(theNamespace);
    const Sequelize = require('sequelize');
    Sequelize.useCLS(namespace);

    const beforeAllBase = async () => {
        // set up the transaction
        transaction = await model.sequelize.transaction({
            autocommit: false
        });

        // create a context and enter the context
        const context = namespace.createContext();
        namespace.enter(context);
        namespace.set(theContext, transaction);
    };

    // wrap each test in a nested transaction
    const beforeEachBase = async () => {
        wrapperTransaction = await model.sequelize.transaction({
            autocommit: false,
            transaction
        });
    }

    // Rollback each nested transaction
    const afterEachBase = async () => {
        await wrapperTransaction.rollback();
    }

    // Rollback the actual transaction
    const afterAllBase = async () => {
        await transaction.rollback();
    }

    return {
        beforeAllBase,
        beforeEachBase,
        afterEachBase,
        afterAllBase
    }
};

module.exports = transactionUtils;