let User = require('./user')

module.exports = (Sequelize, DataTypes) => {

  let Ad = Sequelize.define("ad", {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 100]
        }
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 100]
        }
      },
      body: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          len: [10, 280]
        }
      },
      taken: {
        type: DataTypes.BOOLEAN,
        validate: {
          isBoolean: (val) => {
                             return (typeof(val)=='boolean')
                                }
        }
      },
      public: {
        type: DataTypes.BOOLEAN,
        validate: {
          isBoolean: (val) => {
                             return (typeof(val)=='boolean')
                                }
        }
      },
      payment: {
        type: DataTypes.DECIMAL(5, 2),
        validate: {
          isDecimal: true
        }
      }
    })


  //create seed data
let ad = Ad.create(
      {
        title: 'This is a title.',
        category: 'Technology',
        body: 'I am a body',
        taken: false,
        public: true,
        payment: 1.00
      })

  Ad.create(
      {
        title: 'This is a title 2.',
        category: 'Entertainment',
        body: 'I am a body 2',
        taken: false,
        public: true,
        payment: 1.25
      })

  Ad.create(
      {
        title: 'This is a title 3.',
        category: 'Products',
        body: 'I am a body 3',
        taken: false,
        public: true,
        payment: 1.50
      })

  Ad.create(
      {
        title: 'This is a title 4.',
        category: 'Finance',
        body: 'I am a body 4',
        taken: false,
        public: true,
        payment: 0.50
      })
  Ad.create(
      {
        title: 'This is a title 5.',
        category: 'Music',
        body: 'I am a body 5',
        taken: false,
        public: true,
        payment: 0.10
      })

//association
  //need to identify and associate each ad with an owner/advertiser and a sharer/user...

  // Ad.associate = (models) => {
  //
  //   Ad.hasOne(models.User, {
  //     as: 'Ad_Owner',
  //     foreignKey: 'OwnerId'
  //   })
  //
  //   Ad.hasOne(models.User, {
  //     as: 'Ad_Sharer',
  //     foreignKey: 'SharerId'
  //   })
  //
  // }

  return Ad
}
