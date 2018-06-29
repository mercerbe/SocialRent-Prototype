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
            len: [1,100]
          }
        },
        instagram: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: [1,100]
          }
        },
        twitter: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: [1,100]
          }
        },
        company_name: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: [1, 100]
          }
        }
    })

    //create seed data
    let user = User.create(
      {
        email: 'jerkface1@gmail.com',
        role: 'to be a jerkface 1',
        password: 'trumpisajerk1',
        instagram: 'therealdonald1',
        twitter: 'therealdonaldtrump1',
        company_name: 'MERICA1'
      }
    )
    User.create(
      {
        email: 'jerkface2@gmail.com',
        role: 'to be a jerkface2',
        password: 'trumpisajerk2',
        instagram: 'therealdonald2',
        twitter: 'therealdonaldtrump2',
        company_name: 'MERICA2'
      }
    )

    User.create(
      {
        email: 'jerkface3@gmail.com',
        role: 'to be a jerkface3',
        password: 'trumpisajerk3',
        instagram: 'therealdonald3',
        twitter: 'therealdonaldtrump3',
        company_name: 'MERICA3'
      }
      )

    User.create(
      {
        email: 'jerkface4@gmail.com',
        role: 'to be a jerkface4',
        password: 'trumpisajerk4',
        instagram: 'therealdonald4',
        twitter: 'therealdonaldtrump4',
        company_name: 'MERICA4'
      }
    )

    User.create(
      {
        email: 'jerkface5@gmail.com',
        role: 'to be a jerkface5',
        password: 'trumpisajerk5',
        instagram: 'therealdonald5',
        twitter: 'therealdonaldtrump5',
        company_name: 'MERICA5'
      }
    )


    //associations
    // User.associate = (models) => {
    //     User.hasMany(models.Ad, {
    //         onDelete: 'cascade'
    //     })
    return User
}
