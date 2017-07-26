var express = require('express');
var bcrypt = require('bcrypt');
var router = express.Router();
var db = require('../db');
var salt = 10;

router.get('/', (req, res, next) => {
  res.render('register', {title: 'register'});
});

router.post('/', (req, res, next) => {
  bcrypt.hash(req.body.password, salt, (err, hash) => {
    var user = new db.user({
      name: req.body.username,
      password: hash
    });
    user.save((err, data) => {
      res.redirect('/');
    });
  });

});

module.exports = router;
