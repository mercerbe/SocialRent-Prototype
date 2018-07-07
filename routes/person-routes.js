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
    db.Ad.findAll(
      {
        where: {
          userID: req.params.id
        },
        include: [db.User]
      }
    ).then((ads) => {

      res.render('advertiserDashboard', {Ads: ads, User: ads[0].User})
    })

  })

  //single advertiser dashboard
  app.get('/advertisers/:id', (req, res) => {
    db.Ad.findAll(
      {
        where: {
          advertiserID: req.params.id
        },
        include: [db.Advertiser]
      }
    ).then((ads) => {
      console.log("ads" + ads);
      res.render('advertiserDashboard', {Ads: ads, Advertiser: ads[0].Advertiser})
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

  //single advertiser with associated ads
  app.get('/api/advertisers/:id', (req, res) => {
    db.Advertiser.findOne(
      {
        where: {
          id: req.params.id
        },
        include: [db.Ad]
      }
    ).then((singleAdvertiser) => {
      res.json(singleAdvertiser)
    })

  })

  //single user with associated ads
  app.get('/api/users/:id', (req, res) => {
    db.User.findOne(
      {
        where: {
          id: req.params.id
        },
        include: [db.Ad]
      }
    ).then((singleUser) => {
      res.json(singleUser)
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
           return;
         }

         console.log("advertiser");
         res.send('/advertisers/' + data.id)
       })
     } else {
       console.log("user");
       res.send('/users/' + data.id)
     }
   })
 })

//signup
app.post('/api/:role', (req, res) => {

  console.log(req.params);
  if(req.params.role === 'users') {
    db.User.create(req.body).then((newUser) => {
      res.json(newUser)
      //res.render('userDashboard', {Ads: ads, User: ads[0].Advertiser})
    })

  } else {
    db.Advertiser.create(req.body).then((newAdvertiser) => {
      res.json(newAdvertiser)
      console.log(newAdvertiser);
      //res.render('advertiserDashboard', {Ads: newAdvertiser, Advertiser: newAdvertiser[0].Advertiser})
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
