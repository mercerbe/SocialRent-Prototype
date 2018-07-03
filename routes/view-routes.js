//dependencies
const path = require('path');

var db = require('../models')


//export all handlebars routes
module.exports = (app) => {

  //index aka maketplace page
  app.get('/', (req, res) => {
    db.Ad.findAll({
      where: {
        taken: 0,
        public: 1
      }
    }).then(data => {
      res.json(data)
    })
    // res.redirect('/index')
  })

  //reroute for index
  app.get('/index', (req, res) => {
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

}
