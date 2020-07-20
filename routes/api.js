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


//creates a todo 
router.post('/addtodo', requireAuth, (req, res, next) => {
  Todo.findOneAndUpdate({ "username": req.session.user }, {
    $push: {
      "data": [
        {
          "_id": new ObjectID(),
          "todo": req.body.todo,
          "label": req.body.label,
          "status": req.body.status,
          "due": req.body.due
        }]
    }
  }, { upsert: true }).then( data => res.status(201).json({ message : "created"}))
    .catch(err => res.status(403).json({ message: "Unable to create" }))
})

//get all todos of particular user
router.get('/gettodos', requireAuth, (req, res, next) => {
  Todo.findOne({ "username": req.session.user })
    .then( data => { res.send(data.data) })
})

//updates a todo by  id
router.put('/updatetodo', requireAuth, (req, res, next) => {
  var date = req.body.due;
  var dateObject = new Date(date);
  Todo.findOneAndUpdate({ "username": req.session.user }, {
    "data.$[element]":
    {
      "_id": ObjectID(req.body._id),
      "todo": req.body.todo,
      "label": req.body.label,
      "status": req.body.status,
      "due": dateObject
    }
  }, { arrayFilters: [{ "element._id": ObjectID(req.body._id) }] })
    .then(data => res.status(200).json({ message: "updated" } ))
    .catch(err => res.status(403).json({ message: "update failed" } ))
})

//deletes a (todo)s by the given object (ID)s
router.delete('/deletetodo', requireAuth, (req, res, next) => {
  Todo.findOneAndUpdate({ "username": req.session.user }, {
    $pull: {
      "data": {
        _id: { $in: (req.body.ids).map(id => { return ObjectID(id) }) }
      }
    }
  }).then(data => res.status(200).json({ message: "deleted" } ))
    .catch( err => res.status(403).json({ message: "delete failed"}))
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