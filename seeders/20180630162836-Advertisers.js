'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    return queryInterface.bulkInsert('advertisers', [
      //create seed data

        {
          email: 'jerkface6@gmail.com',
          password: 'trumpisajerk6',
          company_name: 'MERICA10',
          description: 'make murica great10.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          email: 'jerkface7@gmail.com',
          password: 'trumpisajerk7',
          company_name: 'MERICA30',
          description: 'make murica great30.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          email: 'jerkface8@gmail.com',
          password: 'trumpisajerk8',
          company_name: 'MERICA3',
          description: 'make murica great1.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          email: 'jerkface9@gmail.com',
          password: 'trumpisajerk9',
          company_name: 'MERICA4',
          description: 'make murica great2.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          email: 'jerkface10@gmail.com',
          password: 'trumpisajerk10',
          company_name: 'MERICA5',
          description: 'make murica great3.',
          createdAt: new Date(),
          updatedAt: new Date()
        }
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */

    return queryInterface.bulkDelete('Advertiser', null, {});
  }
};
