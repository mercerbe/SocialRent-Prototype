//dependencies
const db = require('../models')

//export all routes
module.exports = (app) => {

  //++++++++++++++++++test routes+++++++++++++++++//
  //single user dashboard
app.get('/user', (req, res) => {
  console.log("redirect user");
  res.render('userDashboard');
})

// single advertiser dashboard
app.get('/advertiser', (req, res) => {
  res.render('advertiserDashboard');
})
//++++++++++++++++++++++++++++++++++++++++++++++++++//


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

  //single advertiser dashboard
  app.get('/api/advertisers/:id', (req, res) => {
    db.Advertiser.findOne(
      {
        where: {
          id: req.params.id
        },
        include: [db.Ad]
      }
    ).then((advertiser) => {
      res.json(advertiser)
    })
  })

  //show all users on site
  app.get('/api/users', (req, res) => {
    db.User.findAll(
      {
      //possibly include ads
    })
  })

  //show all advertisers on site
  app.get('/api/advertisers', (req, res) => {
    db.Advertiser.findAll(
      {
        //possibly include
      }
    ).then((advertisers) => {
      res.json(advertisers)
    })
  })

  //login
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

//signup
app.post('/api/:role', (req, res) => {

  if(req.params.role === "User"){
    //route to users--set up query
    db.User.create(req.params).then(data => {
      console.log(data);
      res.json(data)
    })
  } else{
    //route to advertisers--set up query
    db.Advertiser.create(req.params).then(data => {
      res.json(data)
    })
  }

})



//++++++++++++++++++++++ need to be completed++++++++++++++++++//

  //remove user if account deleted
  app.delete('/api/users/:id', (req, res) => {

    db.User.destroy({
      where: {
        id: req.params.id
      }
    }).then((removedUser) => {
      res.json(removedUser)
    })
  })

  //remove advertiser if account deleted
  app.delete('/api/advertisers/:id', (req, res) => {

    db.Advertiser.destroy({
      where: {
        id: req.params.id
      }
    }).then((removedAdvertiser) => {
      res.json(removedAdvertiser)
    })
  })


}
