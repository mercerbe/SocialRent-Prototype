var User = require('./user')

module.exports = (Sequelize, DataTypes) => {

  var Ad = Sequelize.define("Ad", {
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
          return (typeof(val) == 'boolean')
        }
      }
    },
    public: {
      type: DataTypes.BOOLEAN,
      validate: {
        isBoolean: (val) => {
          return (typeof(val) == 'boolean')
        }
      }
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false
    }

  })

  //association
  //need to identify and associate each ad with an owner/advertiser and a sharer/user...

  // Ad.associate = (models) => {
  //
  //   Ad.hasOne(models.User, {
  //     foreignKey: {
  //       allowNull: true
  //     }
  //   })
  //
  //   Ad.hasOne(models.Advertiser, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   })
  //
  // }

  return Ad
}
