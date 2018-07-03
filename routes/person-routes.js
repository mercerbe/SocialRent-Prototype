//dependencies
const db = require('../models')

//export all routes
module.exports = (app) => {

// login function
  app.post('/api/users/', (req, res) => {
    db.User.findOne({
      where: {
        email: req.body.email,
        password: req.body.password
      }
    }).then((data) => {
      if (!data) {
        db.Advertiser.findOne({
          where: {
            email: req.body.email,
            password: req.body.password
          }
        }).then((data) => {
          if (!data) {
            res.send("User not found")
          }
          console.log("advertiser");
          res.send('/advertiser/' + data.id)
        })
      } else {
        res.send('/user/' + data.id)
      }
    })
  })

  //single user dashboard
  app.get('/user', (req, res) => {
    console.log("redirect user");
    res.render('userDashboard');
  })

// single advertiser dashboard
  app.get('/advertiser', (req, res) => {
    res.render('advertiserDashboard');
  })

  //show all users on site

  //post new user after signup

  //remove user if account deleted
}
