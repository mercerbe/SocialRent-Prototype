//dependencies
const db = require('../models')

//export all routes
module.exports = (app) => {

  //show all posts with user/advertiser id
  app.get('/api/ads', (req, res) => {
    let query = {}
    if(req.query.user_id){
      query.UserId = req.query.user_id
    }

    db.Ad.findAll(
      {
        where: query,
        include: [db.Advertiser]
      }).then( (ad) => {
        res.json(ad)
      })
  })

  //get single ad
  app.get('/api/ads/:id', (req, res) => {

    db.Ad.findOne(
      {
        where:{
          id: req.params.id
        },
        include: [db.Advertiser]
      }
    ).then((ad) => {
      res.json(ad)
    })
  })

  //post new ad
  app.post('/api/ads', (req, res) => {
    db.Ad.create(req.body).then((newAd) => {
      res.json(newAd)
    })
  })

  //remove/delete ad
  app.delete('/api/ads/:id', (req, res) => {
    db.Ad.destroy(
      {
        where: {
          id: req.params.id
        }
      }
    ).then((removedAd) => {
      res.json(removedAd)
    })
  })

  //update an ad -- todo: logic for only letting this happen if it's owned by an advertiser
  app.put('/api/ads/:id', (req, res) => {
    db.Ad.update(
      {
        where: {
          id: req.body.id
        }
      }
    ).then((updatedAd) => {
      res.json(updatedAd)
    })
  })

  //delete an ad
  app.delete('/api/ads/:id', (req, res) => {
    db.Ad.destroy(
      {
        where: {
          id: req.params.id
        }
      }
    ).then((removedAd) => {
      res.json(removedAd)
    })
  })
  
}
