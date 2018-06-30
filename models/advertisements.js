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
  let ad = Ad.create({
      title: 'This is a title.',
      category: 'I am a cateogry.',
      body: 'I am a body',
      taken: false,
      public: true,
    })

  //Ad.associate = (models) => {
    //Ad.hasOne(User)
  //}

//association
  //need to identify and associate each ad with an owner/advertiser and a sharer/user...

  // Ad.associate = (models) => {
  //
  //   Ad.hasOne(models.User, {
  //     foreignKey: {
  //       allowNull: true
  //     }
  //   })
  //
  //   Ad.hasOne(models.Advertiser, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   })
  //
  // }


  return Ad
}
