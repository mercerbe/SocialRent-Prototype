//dependencies
const path = require('path')

var db = require('../models')

var sequelize = require('sequelize')


//export all handlebars routes
module.exports = (app) => {

  //index aka maketplace page
  app.get('/', (req, res) => {

    return db.Ad.findAll({
      where: {
        taken: 0,
        public: 1
      },
      order: [['updatedAt', 'DESC']],
      //attributes: ['title', [sequelize.fn('count', sequelize.col( 'Ad.title')), 'titleCount']],
      //include: [{attributes: ['category', 'body', 'company_name', 'createdAt'], db.Ad}],
      group: ['title']
    }).then(data => {
      res.render('index', { Ads: data })
    })
  })

  //all users page
  app.get('/users', (req, res) => {

    db.User.findAll({
      order: [['updatedAt', 'DESC']]
    }).then(data => {
      res.render('allUsers', {Users: data})
    })
  })

  //all advertisers page
  app.get('/advertisers', (req, res) => {

    db.Advertiser.findAll({
      order: [['updatedAt', 'DESC']]
    }).then(data => {
      res.render('allAdvertisers', {Advertisers: data})
    })
  })

  //reroute for index
  app.get('/index', (req, res) => {
    res.redirect('/')
  })

  //signup page
  app.get('/signup', (req, res) => {
    res.render('signup')
  })

  //login page
  app.get('/login', (req, res) => {
    res.render('login')
  })


}
