let Sequelize = require('sequelize')

let sequelize = require('../config/connection.js')

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

User.sync()

module.exports = User
