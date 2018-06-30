//dependencies
const db = require('../models')

//export all routes
module.exports = (app) => {

  //single user dashboard
  app.get('/api/users/:id', (req, res) => {
    db.User.findOne(
      {
        where: {
          id: req.params.id
        },
        include: [db.Ad]
      }
    ).then((user) => {
      res.json(user)
      //res.redirect('/user')
    })
  })
  //show all users on site
  app.get('/api/users/:role', (req, res) => {

    db.User.findAll(
      {
        where: {
          role: req.params.role
        },
        include: [db.Ad]
      }
    ).then((users) => {
      res.json(users)
    })
  })
  //post new user after signup
  app.post('/api/users', (req, res) => {

    db.User.create(req.body).then((newUser) => {
      res.json(newUser)
    })
  })
  //remove user if account deleted
  app.delete('/api/users/:id', (req, res) => {

    db.User.destroy(
    {
    where: {
      id: req.params.id
      }
    }
  ).then((removedUser) => {
    res.json(removedUser)
  })
  })
}
