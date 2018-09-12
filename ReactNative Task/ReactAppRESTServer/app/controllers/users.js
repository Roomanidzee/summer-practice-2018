const userModel = require('../models/user');
const bcrypt = require('bcrypt-nodejs');
const jwt = require('jsonwebtoken');

exports.saveUser = function(req, resp, next){

    userModel.create({

        username: req.body.username,
        email: req.body.email,
        password: req.body.password

    }, function (err, result) {

        if(err){
            next(err);
        }else{

          resp.json({
              status: "success",
              message: "User added",
              data: null
          });

        }

    });

};

exports.authenticate = function(req, resp, next){

   userModel.findOne({email: req.body.email}, function (err, userInfo) {

       if(err){
           next(err);
       }else{

           if(bcrypt.compareSync(req.body.password, userInfo.password)){

               const token = jwt.sign({id: userInfo._id}, 'gdfgafdgafgadfgsdfgsdfgsrg', {expiresIn: '1h'});

               resp.json({
                   status: "success",
                   message: "User found",
                   data: {
                       user: userInfo,
                       token: token
                   }
               });

           }else{

               resp.json({
                   status: "error",
                   message: "Invalid email / password",
                   data: null
               });

           }

       }

   });

};