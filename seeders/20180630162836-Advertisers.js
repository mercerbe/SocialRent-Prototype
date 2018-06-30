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
          email: 'jerkface1@gmail.com',
          password: 'trumpisajerk1',
          company_name: 'MERICA10',
          description: 'make murica great10.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          email: 'jerkface2@gmail.com',
          password: 'trumpisajerk2',
          company_name: 'MERICA30',
          description: 'make murica great30.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          email: 'jerkface3@gmail.com',
          password: 'trumpisajerk3',
          company_name: 'MERICA3',
          description: 'make murica great1.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          email: 'jerkface4@gmail.com',
          password: 'trumpisajerk4',
          company_name: 'MERICA4',
          description: 'make murica great2.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          email: 'jerkface5@gmail.com',
          password: 'trumpisajerk5',
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
