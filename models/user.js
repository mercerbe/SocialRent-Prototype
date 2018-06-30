module.exports = (Sequelize, DataTypes) => {

    let User = Sequelize.define('user', {
        user: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: [1,50]
          }
        },
        role: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: [1, 20]
          }
        },
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
    User.create(
      {
        user: 'jerkface',
        role: 'to be a jerkface',
        email: 'jerkface@gmail.com',
        password: 'trumpisajerk',
        instagram: 'therealdonald',
        twitter: 'therealdonaldtrump',
        company_name: 'MERICA'
      }
    )
    User.create(
      {
        user: 'jerkface1',
        role: 'to be a jerkface',
        email: 'jerkface1@gmail.com',
        password: 'trumpisajerk',
        instagram: 'therealdonald',
        twitter: 'therealdonaldtrump',
        company_name: 'MERICA'
      }
    )

    User.create(
      {
        user: 'jerkface2',
        role: 'to be a jerkface',
        email: 'jerkface2@gmail.com',
        password: 'trumpisajerk',
        instagram: 'therealdonald',
        twitter: 'therealdonaldtrump',
        company_name: 'MERICA'
      }
      )

    User.create(
      {
        user: 'jerkface3',
        role: 'to be a jerkface',
        email: 'jerkface3@gmail.com',
        password: 'trumpisajerk',
        instagram: 'therealdonald',
        twitter: 'therealdonaldtrump',
        company_name: 'MERICA'
      }
    )

    User.create(
      {
        user: 'jerkface4',
        role: 'to be a jerkface',
        email: 'jerkface4@gmail.com',
        password: 'trumpisajerk',
        instagram: 'therealdonald',
        twitter: 'therealdonaldtrump',
        company_name: 'MERICA'
      }
    )


    //associations
    // User.associate = (models) => {
    //     User.hasMany(models.Ad, {
    //         onDelete: 'cascade'
    //     })
    return User
}
