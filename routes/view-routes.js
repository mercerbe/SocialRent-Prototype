//dependencies
const path = require('path');

//export all handlebars routes
module.exports = (app) => {

  //index aka maketplace page
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index.handlebars'))
  })

  //signup page
  app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/signup.handlebars'))
  })

  //login page
  app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/login.handlebars'))
  })


}
