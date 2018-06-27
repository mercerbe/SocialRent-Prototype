let Sequelize = require('sequelize')

let sequelize = require('..config/connection.js')

let Ad = sequelize.define("ad", {
    title: Sequelize.STRING,
    category: Sequelize.STRING,
    body: Sequelize.TEXT,
    updated_at: Sequelize.DATE,
    taken: Sequelize.BOOLEAN,
    public: Sequelize.BOOLEAN,
    created_at: Sequelize.DATE
  })

  // Syncs with DB
  Ad.sync();

  // Makes the Chirp Model available for other files (will also create a table)
  module.exports = Ad;