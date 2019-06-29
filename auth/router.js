const { Router } = require('express');
const { toJWT } = require('./jwt');
//const bcrypt = require('bcrypt');
const User = require('../user/model');
const router = new Router();

router.post('/users', (req, res, next) => {
  let { email, password, password_confirmation } = req.body;
  User.create(req.body)
    .then(user => {
      res.status(201).json({
        message: 'A New User Was Added',
        'new User': user
      });
    })
    .catch(error => next(error));
});

module.exports = router;
