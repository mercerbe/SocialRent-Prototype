//dependencies--models
const db = require('../models')

//export all routes
module.exports = (app) => {

  //single advertiser dashboard--find one
  app.get('/api/users/:id', (req, res) => {
    db.User.findOne(
      {
        where: {
          id: req.params.id
        },
        include: [db.Ad]
      }
    ).then((advertiser) => {
      res.json(advertiser)
      //res.redirect('/advertiser')
    })
  })

  //show all advertisers on site -- find all
  app.get('/api/users/:role', (req, res) => {

    db.User.findAll(
      {
        where: {
          role: req.params.role
        },
        include: [db.Ad]
      }
    ).then((advertisers) => {
      res.json(advertisers)
    })
  })
  //post new advertiser to list of advertisers-- api route
  app.post('/api/users', (req, res) => {

    db.User.create(req.body).then((newAdvertiser) => {
      res.json(newAdvertiser)
    })
  })

  //remove/delete an advertiser and thier posts
  app.delete('/api/users/:id', (req, res) => {

    db.User.destroy(
    {
    where: {
      id: req.params.id
      }
    }
  ).then((removedAdvertiser) => {
    res.json(removedAdvertiser)
  })
  })
}
