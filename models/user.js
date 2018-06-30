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
          allowNull: true,
          validate: {
            len: [0,100]
          }
        },
        twitter: {
          type: DataTypes.STRING,
          allowNull: true,
          validate: {
            len: [0,100]
          }
        }
    })



  //associations
  // User.associate = (models) => {
  //     User.hasMany(models.Ad)
  //   }

  return User
}
