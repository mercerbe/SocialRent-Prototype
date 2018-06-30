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

    return queryInterface.bulkInsert('users', [

        {
          email: 'jerkface1@gmail.com',
          password: 'trumpisajerk1',
          instagram: 'therealdonald1',
          twitter: 'therealdonaldtrump1',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          email: 'jerkface2@gmail.com',
          password: 'trumpisajerk2',
          instagram: 'therealdonald2',
          twitter: 'therealdonaldtrump2',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          email: 'jerkface3@gmail.com',
          password: 'trumpisajerk3',
          instagram: 'therealdonald20',
          twitter: 'therealdonaldtrump20',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          email: 'jerkface4@gmail.com',
          password: 'trumpisajerk4',
          instagram: 'therealdonald30',
          twitter: 'therealdonaldtrump30',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          email: 'jerkface5@gmail.com',
          password: 'trumpisajerk5',
          instagram: 'therealdonald40',
          twitter: 'therealdonaldtrump40',
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

    return queryInterface.bulkDelete('User', null, {})
  }
};
