let User = require('./user')

module.exports = (Sequelize, DataTypes) => {

<<<<<<< HEAD
  let Ad = Sequelize.define("Ad", {
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
=======
  let Ad = Sequelize.define("ad", {
      title: DataTypes.STRING, //validation needed
      category: DataTypes.STRING,
      body: DataTypes.TEXT,
      taken: DataTypes.BOOLEAN,
      public: DataTypes.BOOLEAN,
>>>>>>> loren
    })

  //create
  let ad = Ad.create({
      title: 'This is a title.',
      category: 'I am a cateogry.',
      body: 'I am a body',
      taken: false,
      public: true,
    })

<<<<<<< HEAD
  //create seed data
let ad = Ad.create(
      {
        title: 'This is a title.',
        category: 'I am a cateogry.',
        body: 'I am a body',
        taken: false,
        public: true,
        payment: 1.00
      })

  Ad.create(
      {
        title: 'This is a title 2.',
        category: 'I am a cateogry 2.',
        body: 'I am a body 2',
        taken: false,
        public: true,
        payment: 1.25
      })

  Ad.create(
      {
        title: 'This is a title 3.',
        category: 'I am a cateogry 3.',
        body: 'I am a body 3',
        taken: false,
        public: true,
        payment: 1.50
      })

  Ad.create(
      {
        title: 'This is a title 4.',
        category: 'I am a cateogry 4.',
        body: 'I am a body 4',
        taken: false,
        public: true,
        payment: 0.50
      })
  Ad.create(
      {
        title: 'This is a title 5.',
        category: 'I am a cateogry 5.',
        body: 'I am a body 5',
        taken: false,
        public: true,
        payment: 0.10
      })
  //association
=======
>>>>>>> loren
  //Ad.associate = (models) => {
    //Ad.hasOne(User)
  //}

  return Ad
}
