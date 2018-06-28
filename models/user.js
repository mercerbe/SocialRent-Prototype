module.exports = (Sequelize, DataTypes) => {

    let User = Sequelize.define('user', {
        user: DataTypes.STRING,
        role: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        instagram: DataTypes.STRING,
        twitter: DataTypes.STRING,
        company_name: DataTypes.STRING,
    })

    // User.associate = (models) => {
    //     User.hasMany(models.Ad, {
    //         onDelete: 'cascade'
    //     })
    return User
}
<<<<<<< HEAD

=======
>>>>>>> 6c0c5752c8dacf37b13ef49156331d99797e4f8c
