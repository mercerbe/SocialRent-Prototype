module.exports = (Sequelize, DataTypes) => {

    let User = Sequelize.define('user', {
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            isEmail: true
          }
        },
        role: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: [1, 20]
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
        },
        company_name: {
          type: DataTypes.STRING,
          allowNull: true,
          validate: {
            len: [0, 100]
          }
        },
        description: {
          type: DataTypes.STRING,
          allowNull: true,
          validate: {
            len: [0,280]
          }
        }
    })

    //create seed data
    let user =
    User.create(
      {
        email: 'jerkface1@gmail.com',
        role: 'User',
        password: 'trumpisajerk1',
        instagram: 'therealdonald1',
        twitter: 'therealdonaldtrump1'
      }
    )
    User.create(
      {
        email: 'jerkface2@gmail.com',
        role: 'User',
        password: 'trumpisajerk2',
        instagram: 'therealdonald2',
        twitter: 'therealdonaldtrump2'
      }
    )

    User.create(
      {
        email: 'jerkface3@gmail.com',
        role: 'Advertiser',
        password: 'trumpisajerk3',
        company_name: 'MERICA3',
        description: 'make murica great1.'
      }
      )

    User.create(
      {
        email: 'jerkface4@gmail.com',
        role: 'Advertiser',
        password: 'trumpisajerk4',
        company_name: 'MERICA4',
        description: 'make murica great2.'
      }
    )

    User.create(
      {
        email: 'jerkface5@gmail.com',
        role: 'Advertiser',
        password: 'trumpisajerk5',
        company_name: 'MERICA5',
        description: 'make murica great3.'
      }
    )


    //associations
    // User.associate = (models) => {
    //     User.hasMany(models.Ad)
    //   }

    return User
}
