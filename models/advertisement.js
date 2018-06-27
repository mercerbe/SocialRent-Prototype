module.exports = (sequelize, DataTypes) => {

  let Ad = sequelize.define("ad", {
      title: Sequelize.STRING,
      category: Sequelize.STRING,
      body: Sequelize.TEXT,
      updated_at: Sequelize.DATE,
      taken: Sequelize.BOOLEAN,
      public: Sequelize.BOOLEAN,
      created_at: Sequelize.DATE
  })

  Ad.associate = (models) => {
    Ad.hasOne(User)
  }

  return Ad
}

