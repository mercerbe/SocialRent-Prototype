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
            advertiserId: 1,
            title: 'Tesla 3',
            category: 'Technology',
            body: 'Advertise our new Tesla Model 3, a version of the Tesla that is accessible to everyone!',
            taken: false,
            public: true,
            payment: 1.00,
            createdAt: new Date(),
            updatedAt: new Date()
            // include: [{
            //   association: Ad.Advertiser
            // }]
          },
          {

            advertiserId: 2,
            title: 'Amazon',
            category: 'Products',
            body: 'Want Amazon to be THE only place to shop on the Internet?  This is the ad for you!',
            taken: false,
            public: true,
            payment: 1.25,
            createdAt: new Date(),
            updatedAt: new Date()
            // include: [{
            //   association: Ad.Advertiser
            // }]
          },
          {

            advertiserId: 3,
            title: 'Spotify Music Streaming',
            category: 'Music',
            body: 'Advertise for Spotify!',
            taken: false,
            public: true,
            payment: 1.50,
            createdAt: new Date(),
            updatedAt: new Date()
            // include: [{
            //   association: Ad.Advertiser
            // }]
          },
          {
            advertiserId: 4,
            title: 'Apple',
            category: 'Products',
            body: 'Want to see the demise of Microsoft?  Advertise our products!',
            taken: false,
            public: true,
            payment: 0.50,
            createdAt: new Date(),
            updatedAt: new Date()
            // include: [{
            //   association: Ad.Advertiser
            // }]
          },
          {
            advertiserId: 5,
            title: 'Nintendo',
            category: 'Entertainment',
            body: "Advertise our video games!  Now you're playing with power.",
            taken: false,
            public: true,
            payment: 0.10,
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
