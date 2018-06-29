let User = require('./user')

module.exports = (Sequelize, DataTypes) => {

  let Ad = Sequelize.define("ad", {
      title: DataTypes.STRING, //validation needed
      category: DataTypes.STRING,
      body: DataTypes.TEXT,
      taken: DataTypes.BOOLEAN,
      public: DataTypes.BOOLEAN,
    })

  //create
  // let ad = Ad.create({
  //     title: 'This is a title.',
  //     category: 'I am a cateogry.',
  //     body: 'I am a body',
  //     taken: false,
  //     public: true,
  //   })

  //Ad.associate = (models) => {
    //Ad.hasOne(User)
  //}

  return Ad
}
