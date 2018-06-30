//dependencies
const db = require('../models')

//export all routes
module.exports = (app) => {

  //single user dashboard
  //findOne
  app.get("/api/users/:id", (req, res) => {
    db.User.findOne({
      where: {
        email: req.params.id
      },
    })

  })




  //show all users on site
  //



  //post new user after signup
  //



  //remove user if account deleted
  //


}
