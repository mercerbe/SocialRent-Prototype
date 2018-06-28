//dependencies
const db = require('../models')

//export all routes
module.exports = (app) => {

  //show all posts on index/marketplace
  app.get('/api/ads', (req, res) => {

  })

  //get single ad
  app.get('/api/ads/:id', (req, res) => {

  })

  //post new ad
  app.post('/api/ads', (req, res) => {

  })

  //remove/delete ad
  app.delete('/api/ads/:id', (req, res) => {

  })

  //update an ad -- todo: logic for only letting this happen if it's owned by an advertiser
  app.put('/api/ads', (req, res) => {
    
  })
}
