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
            company_name: 'Tesla',
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
            advertiserId: 1,
            title: 'Tesla Model S',
            category: 'Products',
            body: 'Advertise our new Tesla Model S, boasting 0 to 60 in 2.4 seconds!',
            company_name: 'Tesla',
            taken: false,
            public: true,
            payment: 1.00,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            advertiserId: 2,
            title: 'Amazon',
            category: 'Products',
            body: 'Want Amazon to be THE only place to shop on the Internet?  This is the ad for you!',
            company_name: 'Amazon',
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
            advertiserId: 2,
            title: 'Amazon Echo',
            category: 'Products',
            body: 'Do you want everything you say to be recorded?  Advertise our amazing surveillance product disguised as a bluetooth speaker!',
            company_name: 'Amazon',
            taken: false,
            public: true,
            payment: 1.20,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            advertiserId: 3,
            title: 'Spotify Music Streaming',
            category: 'Music',
            body: 'Advertise for Spotify!',
            company_name: 'Spotify',
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
            advertiserId: 3,
            title: 'Spotify Music Streaming',
            category: 'Events',
            body: 'Advertise for a special subscription offer, free for the first three months!',
            company_name: 'Spotify',
            taken: false,
            public: true,
            payment: 1.75,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            advertiserId: 4,
            title: 'Apple',
            category: 'Technology',
            body: 'Want to see the demise of Microsoft?  Advertise our products!',
            company_name: 'Apple',
            taken: false,
            public: true,
            payment: 0.50,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            advertiserId: 4,
            title: 'Apple',
            category: 'Products',
            body: 'New Apple iPhone X-S available now!',
            company_name: 'Apple',
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
            company_name: 'Nintendo',
            taken: false,
            public: true,
            payment: 0.10,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            advertiserId: 5,
            title: 'Nintendo',
            category: 'Products',
            body: "Nintendo Switch available in stores everywhere!",
            company_name: 'Nintendo',
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
