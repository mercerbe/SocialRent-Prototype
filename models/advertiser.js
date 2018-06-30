module.exports = (Sequelize, DataTypes) => {

    let Advertiser = Sequelize.define('advertiser', {
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
        company_name: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: [0, 100]
          }
        },
        description: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: [0,280]
          }
        }
    })


    //associations
    // Advertiser.associate = (models) => {
    //     Advertiser.hasMany(models.Ad)
    //   }

    return Advertiser
}
