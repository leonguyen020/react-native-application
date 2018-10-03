const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/user");

exports.post_new_user = (req, res, next) => {
    User.find({ email: req.body.email })
      .exec()
      .then(user => {
        if (user.length >= 1) {
          return res.status(409).json({
            message: "Mail exists"
          });
        } else {
          bcrypt.hash(req.body.password, 10, (err, hash) => {
            if (err) {
              return res.status(500).json({
                error: err
              });
            } else {
              const user = new User({
                _id: new mongoose.Types.ObjectId(),
                email: req.body.email,
                password: hash
              });
              user
                .save()
                .then(result => {
                  console.log(result);
                  res.status(201).json({
                    message: "User created"
                  });
                })
                .catch(err => {
                  console.log(err);
                  res.status(500).json({
                    error: err
                  });
                });
            }
          });
        }
      });
  }

exports.post_login = (req, res, next) => {
    User.find({ email: req.body.email })
      .exec()
      .then(user => {
        if (user.length < 1) {
          return res.status(401).json({
            message: "Auth failed"
          });
        }
        bcrypt.compare(req.body.password, user[0].password, (err, result) => {
          if (err) {
            return res.status(401).json({
              message: "Auth failed"
            });
          }
          if (result) {
            const token = jwt.sign(
              {
                email: user[0].email,
                userId: user[0]._id
              },
              process.env.JWT_KEY,
              {
                  expiresIn: "1h"
              }
            );
            return res.status(200).json({
              message: "Auth successful",
              token: token
            });
          }
          res.status(401).json({
            message: "Auth failed"
          });
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
  }

//Debug feature, even difficult to dehash a password salted 10 but will remove in production 
exports.get_all_login = (req, res, next) => {
  User.find()
      .select('-__v') //Control which data you want to fetch
      .exec()
      .then(docs => {
          const response = {
              count: docs.length,
              account: docs.map(doc => {
                  return {
                      email: doc.email,
                      password: doc.password,
                      _id: doc._id,
                      request: {
                          type: 'GET',
                          url: req.protocol + '://' + req.get('host') + req.originalUrl + doc._id //dynamic url get instead of hardcode
                      }
                  }
              })
          };
          res.status(200).json(response)
      })
      .catch(err => {
          console.log(err);
          res.status(500).json({error: err})
      });
}

exports.edit_login = (req, res, next) => {
  const id = req.params.userId;
  const updateOps = {};
  for (const ops of req.body) {
      updateOps[ops.propName] = ops.value;
  }
  User.update({_id: id}, {$set: updateOps})
      .exec()
      .then(result => {
          res.status(200).json({
              message: 'User updated',
              request: {
                  type: 'GET',
                  url: req.protocol + '://' + req.get('host') + req.originalUrl
              }
          })
      })
      .catch(err => {
          console.log(err);
          res.status(500).json({error:err});
      });
}

exports.delete_account = (req, res, next) => {
    User.remove({ _id: req.params.userId })
      .exec()
      .then(result => {
        res.status(200).json({
          message: "User deleted"
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
  }

