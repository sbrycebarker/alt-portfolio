const express = require('express'),
      session = require('express-session'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      massive = require('massive'),
      passport = require('passport')
      Auth0 = require('passport-auth0'),
      config = require('./config.js');
      elephant = "string"


      const app = express();


      // <<===============================SERVER SETUP=============================>>

      app.use(bodyParser.json())
      app.use(cors())
      app.use(session({
        resave: true,
        saveUninitialized: true,
        secret: 'pizza'
      }))

      app.use(passport.initialize());
      app.use(passport.session())

      app.use(express.static('./public'))

      var port = 8050

      app.listen(port, function(){
        console.log("listining on port" + port)
      })
