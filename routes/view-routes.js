//dependencies
const path = require('path');

const db = require('../models')

//export all handlebars routes
module.exports = (app) => {

  //index aka maketplace page
  app.get('/', (req, res) => {
    console.log("returning.... " + db.ad);
    db.ad.findAll({
      where: {
        taken: 0,
        public: 1
      }
    }).then(data => {
      res.render('index', { Ads: data })
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
