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
    db.user.findOne(
      {
        where: {
          id: req.params.id
        },
        include: [db.ad]
      }
    ).then((user) => {
      res.json(user)
      //res.redirect('/user/:id')
    })
  })

  //single advertiser dashboard
  app.get('/advertisers/:id', (req, res) => {
    db.advertiser.findOne(
      {
        where: {
          id: req.params.id
        },
        include: [db.ad]
      }
    ).then((advertiser) => {
      res.json(advertiser)
      //res.redirect('/advertiser/:id')
    })
  })

  //show all users on site
  app.get('/api/users', (req, res) => {
    db.user.findAll(
      {
      //possibly include ads
      }
    ).then((users) => {
      res.json(users)
    })
  })

  //show all advertisers on site
  app.get('/api/advertisers', (req, res) => {
    db.advertiser.findAll(
      {
        //possibly include
      }
    ).then((advertisers) => {
      res.json(advertisers)
    })
  })

  //login (changed post to get!!!!!!)
  app.get('/api/users/', (req, res) => {
   db.user.findOne({
     where: {
       email: req.body.email,
       password: req.body.password
     }
   }).then((data) => {
     if (!data) {
       db.advertiser.findOne({
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

  console.log(req.params);
  if(req.params.role === 'users') {
    db.user.create(req.body).then((newUser) => {
      res.json(newUser)
      //res.redirect('/user/' + newUser.id)
    })

  } else {
    db.advertiser.create(req.body).then((newAdvertiser) => {
      res.json(newAdvertiser)
      //res.redirect('/advertiser/' + newAdvertiser.id)
    })
  }


})



//++++++++++++++++++++++ need to be completed++++++++++++++++++//

  //remove user if account deleted
  app.delete('/api/users/:id', (req, res) => {

    db.user.destroy({
      where: {
        id: req.params.id
      }
    }).then((removedUser) => {
      res.json(removedUser)
    })
  })

  //remove advertiser if account deleted
  app.delete('/api/advertisers/:id', (req, res) => {

    db.advertiser.destroy({
      where: {
        id: req.params.id
      }
    }).then((removedAdvertiser) => {
      res.json(removedAdvertiser)
    })
  })


}
