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

    return queryInterface.bulkInsert('Advertisers', [
      //create seed data

        {
          email: 'elonmusk1@gmail.com',
          password: 'password1',
          company_name: 'The Boring Company',
          description: 'Advertise the future with me.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          email: 'jeffbezos1@gmail.com',
          password: 'password1',
          company_name: 'Amazon Web Services',
          description: 'Advertise for Amazon!',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          email: 'spotify1@gmail.com',
          password: 'password1',
          company_name: 'Spotify Music',
          description: 'Do you love music?  Advertise our streaming services!',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          email: 'apple1@gmail.com',
          password: 'password1',
          company_name: 'Apple Corporation',
          description: 'iPhone rules and Android drools?  Advertise with us!',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          email: 'nintendo1@gmail.com',
          password: 'password1',
          company_name: 'Nintendo',
          description: "Now you're playing with power.",
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
