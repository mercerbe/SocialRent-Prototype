module.exports = (sequelize, DataTypes) => {

    let User = sequelize.define('user', {
        user: Sequelize.STRING,
        role: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.STRING,
        instagram: Sequelize.STRING,
        twitter: Sequelize.STRING,
        company_name: Sequelize.STRING,
        created_at: Sequelize.DATE,
        updated_at: Sequelize.DATE
    })

    User.associate = (models) => {
        User.hasMany(models.Ad, {
            onDelete: 'cascade'
        })
    }

    return User

}