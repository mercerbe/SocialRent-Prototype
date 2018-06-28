<<<<<<< HEAD
let router = require('express').Router()

router.get("/", function(req, res) {
    res.render('index')
})

module.exports = router
=======
//dependencies
const path = require('path');

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


}
>>>>>>> 6c0c5752c8dacf37b13ef49156331d99797e4f8c
