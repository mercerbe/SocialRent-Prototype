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
          email: 'tomsmith1@gmail.com',
          password: 'password1',
          instagram: 'goldsmithtom',
          twitter: '@goldsmithtom',
          createdAt: new Date (),
          updatedAt: new Date()
        },
        {
          email: 'elonmusk1@gmail.com',
          password: 'password1',
          instagram: 'imaketeslas',
          twitter: '@imaketeslas',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          email: 'jeffbezos1@gmail.com',
          password: 'password1',
          instagram: 'iselleverything',
          twitter: '@isellevertyhing',
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
