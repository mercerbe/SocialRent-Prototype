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
  app.get('/users/:id', (req, res) => {
    db.User.findOne(
      {
        where: {
          id: req.params.id
        },
        include: [db.Ad]
      }
    ).then((user) => {
      res.json(user)
      //res.redirect('/user/:id')
    })

  })

  //single advertiser dashboard
  app.get('/advertisers/:id', (req, res) => {
    db.Advertiser.findOne(
      {
        where: {
          creatorID: req.params.id
        },
        include: [db.Advertiser]
      }
    ).then((advertiser) => {
      res.render('advertiserDashboard', {Ads: advertiser})
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
  app.post('/api/login/', (req, res) => {
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
         res.send('/api/advertisers/' + data.id)
       })
     } else {
       res.send('/api/users/' + data.id)
     }
   })
 })

//signup
app.post('/api/:role', (req, res) => {

  console.log(req.params);
  if(req.params.role === 'users') {
    db.User.create(req.body).then((newUser) => {
      res.json(newUser)
      //res.redirect('/user/' + newUser.id)
    })

  } else {
    db.Advertiser.create(req.body).then((newAdvertiser) => {
      res.json(newAdvertiser)
      //res.redirect('/advertiser/' + newAdvertiser.id)
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
