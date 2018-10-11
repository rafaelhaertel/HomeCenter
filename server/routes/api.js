var express = require('express');
var router = express.Router();
var passport = require('passport');

var User = require('../models/user.js');


router.post('/register', function(req, res) {
  User.find({}, function(err, users) {
    if (err) {
      res.send('Error = ' + err, 400);
      throw err;
    } 
    
    if (users.length > 2) {
      return res.status(500).json({
        err: "Limite de usuários atingido"
      });
    }
    else {
      User.register(new User({ username: req.body.username,
       admin: false}),
        req.body.password, function(err, account) {
        if (err) {
          return res.status(500).json({
            err: err
          });
        }
        passport.authenticate('local')(req, res, function () {
          return res.status(200).json({
            status: 'Registration successful!'
          });
        });
      });
    }
  });
});

router.post('/login', function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).json({
        err: info
      });
    }
    req.logIn(user, function(err) {
      if (err) {
        return res.status(500).json({
          err: 'Could not log in user'
        });
      }
      req.session.cookie.expires = new Date(Date.now()+ 7200000);
      res.status(200).json({
        status: 'Login successful!'
      });
    });
  })(req, res, next);
});

router.get('/logout', function(req, res) {
  req.logout();
  res.status(200).json({
    status: 'Bye!'
  });
});

router.get('/status', function(req, res) {

  if (!req.isAuthenticated() && (req.session.cookie.maxAge < 1)) {
    return res.status(440).json({
      status: false,
      err: "Sua sessão expirou, Você será redirecionado",
    });
  }

  if (!req.isAuthenticated() && (req.session.cookie.maxAge > 1)) {
    return res.status(401).json({
      status: false
    });
  }
  
  res.status(200).json({
    status: true
  });
});


module.exports = router;