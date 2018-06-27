module.exports = (sequelize, DataTypes) => {

  let Ad = sequelize.define("ad", {
      title: Sequelize.STRING, //validation needed
      category: Sequelize.STRING,
      body: Sequelize.TEXT,
      updated_at: Sequelize.DATE,
      taken: Sequelize.BOOLEAN,
      public: Sequelize.BOOLEAN,
      created_at: Sequelize.DATE
  })

  // TEST THIS!
  let ad = Ad.build({
      title: 'This is a title.',
      category: 'I am a cateogry.',
      body: 'I am a body',
      updated_at: DATE,
      taken: false,
      public: true,
      created_at: DATE
    })

    ad.save().catch(error => {
      console.log('ERROR')
    })

  Ad.associate = (models) => {
    Ad.hasOne(User)
  }

  return Ad
}
