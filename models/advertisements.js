var User = require('./user')

module.exports = (Sequelize, DataTypes) => {

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
    company_name: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [0, 100]
      }
    },
    taken: {
      type: DataTypes.BOOLEAN,
      validate: {
        isBoolean: (val) => {
          return (typeof (val) == 'boolean')
        }
      }
    },
    public: {
      type: DataTypes.BOOLEAN,
      validate: {
        isBoolean: (val) => {
          return (typeof (val) == 'boolean')
        }
      }
    },
    payment: {
      type: DataTypes.DECIMAL(5, 2),
      validate: {
        isDecimal: true
      }
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
  })
  Ad.associate = function(models) {
    Ad.belongsTo(models.Advertiser)//,
    // Ad.hasOne(models.User)
  }

return Ad
}
