
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
      }], {},;
    */

    // create seed data
    return queryInterface.bulkInsert('Users', [{
      email: 'jerkface1@gmail.com',
      role: 'User',
      password: 'trumpisajerk1',
      instagram: 'therealdonald1',
      twitter: 'therealdonaldtrump1'

    }, {
      email: 'jerkface2@gmail.com',
      role: 'User',
      password: 'trumpisajerk2',
      instagram: 'therealdonald2',
      twitter: 'therealdonaldtrump2'

    }, {
      email: 'jerkface3@gmail.com',
      role: 'Advertiser',
      password: 'trumpisajerk3',
      company_name: 'MERICA3',
      description: 'make murica great1.'

    }, {
      email: 'jerkface4@gmail.com',
      role: 'Advertiser',
      password: 'trumpisajerk4',
      company_name: 'MERICA4',
      description: 'make murica great2.'

    }, {
      email: 'jerkface5@gmail.com',
      role: 'Advertiser',
      password: 'trumpisajerk5',
      company_name: 'MERICA5',
      description: 'make murica great3.'

    }], {})
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {},;
    */
  }
};
