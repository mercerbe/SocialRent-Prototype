<<<<<<< HEAD
var express = require("express");
var bodyParser = require("body-parser");

// bring in the models
var db = require("./models");

var app = express();
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

var routes = require("./routes/view-routes.js");

app.use(routes);

// listen on port 3000
var PORT = process.env.PORT || 3000;
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App now listening on port:", PORT);
  });
});
=======
//depenencies
const express = require('express');
const db = require('./models');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 8081;

//static route
app.use(express.static('public'));

//body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//-------------routes------------------//

//static routes
require("./routes/view-routes.js")(app);
require("./routes/ad-routes.js")(app);
require("./routes/advertiser-routes.js")(app);
require("./routes/user-routes.js")(app);

//-----Listening and sync with db -------//
db.sequelize.sync()
  .then(() =>{
    app.listen(PORT, () => {
      console.log("app listening on port:", PORT);
    })
  })
>>>>>>> 6c0c5752c8dacf37b13ef49156331d99797e4f8c
