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
          email: 'johndoe1@gmail.com',
          password: 'password1',
          instagram: 'johnrocks',
          twitter: '@johnrocks',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          email: 'lfouts1@gmail.com',
          password: 'password1',
          instagram: 'lfouts',
          twitter: '@lfouts',
          createdAt: new Date (),
          updatedAt: new Date()
        },
        {
          email: 'mercerbe1@gmail.com',
          password: 'password1',
          instagram: 'bencodes',
          twitter: '@bencodes',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          email: 'romeokilo25@gmail.com',
          password: 'password1',
          instagram: 'romeokilo25',
          twitter: '@romeokilo25',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          email: 'mjtedder@gmail.com',
          password: 'password1',
          instagram: 'fully_coded',
          twitter: '@fully_coded',
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
