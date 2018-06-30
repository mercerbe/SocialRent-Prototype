//dependencies
const path = require('path');

var db = require('../models')


//export all handlebars routes
module.exports = (app) => {

  //index aka maketplace page
  app.get('/', (req, res) => {
    res.render('index')
  })

  //signup page
  app.get('/signup', (req, res) => {
    res.render('signup')
  })

  //login page
  app.get('/login', (req, res) => {
    res.render('login')
  })

  //test static routes
  app.get('/user', (req, res) => {
    res.render('userDashboard');
  })

  app.get('/advertiser', (req, res) => {
    res.render('advertiserDashboard');
  })

  app.post('/api/users/', (req, res) => {
    db.User.findOne({
      where: {
        email: req.body.email,
        password: req.body.password
      }
    }).then((data) => {
      res.json(data)
    })
  })

}
