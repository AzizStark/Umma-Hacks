const express = require('express');
const crypto = require('crypto');
const router = express.Router()
const Users = require('../models/umma');
const ObjectID = require('mongodb').ObjectID

//Authentication Function to secure APIs
const requireAuth = (req, res, next) => {
  if (req.session.isLogged === true) {
    next();
  } else {
    return false
  }
};

router.get('/isLogged', (req, res, next) => {
  if (req.session.isLogged === true) {
    res.status(200).json({ data: "Logged", user: req.session.user })
  }
  else {
    res.status(401).json({ data: "Error" })
  } 
})

//login to create a session
router.post('/login', (req, res, next) => {
  const header = Buffer.from(req.headers.authorization.split(" ")[1], 'base64').toString()
  const index = header.lastIndexOf(':')
  const email = header.slice(0, index)
  const pass = header.slice(index + 1)
  Users.findOne({ $or: [{ email: email }, { userName: email }] })
    .then(data => {
      if (data !== null) {
        var hashed = crypto.pbkdf2Sync(pass, process.env.SALT + data.pepper, 1000, 64, 'sha256').toString('hex');
        if (hashed === data.password) {
          req.session.isLogged = true;
          req.session.user = data.userName
          res.send("Login Successful");
          //authenticated  
        }
        else {
          res.status(401).json({ message: "Password Incorrect" })
        }
      }
      else {
        res.status(404).json({ message: "Account not found" })
      }
    })
    .catch(err => console.log(err))
})

//for new user to sign up
router.post('/signup', (req, res, next) => {
  const header = Buffer.from(req.headers.authorization.split(" ")[1], 'base64').toString()
  const index = header.lastIndexOf(':')
  const user = header.slice(0, index).toLowerCase()
  const pass = header.slice(index + 1)
  const email = req.body.email.toLowerCase()
  const current_date = (new Date()).valueOf().toString();
  const random = Math.random().toString();
  const pepper = crypto.createHash('sha1').update(current_date + random).digest('hex');

  const hash = crypto.pbkdf2Sync(pass, process.env.SALT + pepper, 1000, 64, 'sha256').toString('hex');

  Users.findOne({
    $or: [
      { email: email },
      { userName: user }
    ]
  })
    .then(data => {
      if (data == null) {
        Users.create({
          "userName": user,
          "email": email,
          "password": hash,
          "pepper": pepper
        })
          .then(data => {
            req.session.isLogged = true;
            req.session.user = user
            res.json(data)
          })
          .catch(err => console.log(err))
      }
      else {
        res.status(309).json({
          message: "Already exists",
          email: data.email
        })
      }
    })
    .catch(err => {
      console.log(err)
    })
})

router.get('/logout', (req, res, next) => {
  if (req.session) {
    req.session.destroy( (err) => {
      if(err) {
        return next(err);
      } else {
        return res.status(200).json({ message: "out" } );
      }
    });
  }
});

module.exports = router;