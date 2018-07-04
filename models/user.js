module.exports = (Sequelize, DataTypes) => {

    let User = Sequelize.define('user', {
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            isEmail: true
          }
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: [8,32]
          }
        },
        instagram: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: [0,100]
          }
        },
        twitter: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: [0,100]
          }
        },
        createdAt:{
          type: DataTypes.DATE,
          allowNull: false
        },
        updatedAt:{
          type: DataTypes.DATE,
          allowNull: false
        }
    }/*,
      {
        classMethods: {
          associate: function (models) {
          User.hasMany(models.Ad)
        },
        tableName: 'Ad'
      }
    }*/)

    User.associate = function(models) {
      User.hasMany(models.ad)
    }


    return User
}
