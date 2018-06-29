let User = require('./user')
module.exports = (Sequelize, DataTypes) => {

  let Ad = Sequelize.define("ad", {
      title: DataTypes.STRING, //validation needed
      category: DataTypes.STRING,
      body: DataTypes.TEXT,
      taken: DataTypes.BOOLEAN,
      public: DataTypes.BOOLEAN,
    })

  // TEST THIS! //build
  let ad = Ad.create({
      title: 'ls 2020.',
      category: 'Personal Items.',
      body: '',
      taken: false,
      public: true,
    })

  //Ad.associate = (models) => {
    //Ad.hasOne(User)
  //}

  return Ad
}