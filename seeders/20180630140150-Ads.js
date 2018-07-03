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

    return queryInterface.bulkInsert('ads', [
      //create seed data

          {
            title: 'This is a title.',
            category: 'Technology',
            body: 'I am a body',
            taken: false,
            public: true,
            createdAt: new Date(),
            updatedAt: new Date()
            // include: [{
            //   association: Ad.Advertiser
            // }]
          },
          {
            title: 'This is a title 2.',
            category: 'Entertainment',
            body: 'I am a body 2',
            taken: false,
            public: true,
            createdAt: new Date(),
            updatedAt: new Date()
            // include: [{
            //   association: Ad.Advertiser
            // }]
          },
          {
            title: 'This is a title 3.',
            category: 'Products',
            body: 'I am a body 3',
            taken: false,
            public: true,
            createdAt: new Date(),
            updatedAt: new Date()
            // include: [{
            //   association: Ad.Advertiser
            // }]
          },
          {
            title: 'This is a title 4.',
            category: 'Finance',
            body: 'I am a body 4',
            taken: false,
            public: true,
            createdAt: new Date(),
            updatedAt: new Date()
            // include: [{
            //   association: Ad.Advertiser
            // }]
          },
          {
            title: 'This is a title 5.',
            category: 'Music',
            body: 'I am a body 5',
            taken: false,
            public: true,
            createdAt: new Date(),
            updatedAt: new Date()
            // include: [{
            //   association: Ad.Advertiser
            // }]
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
    return queryInterface.bulkDelete('ads', null, {});
  }
};
