const jwt = require('jsonwebtoken');
const app = require('../config/app_config');

exports.validateUser = function (req, resp, next) {

     jwt.verify(req.headers['x-access-token'], 'gdfgafdgafgadfgsdfgsdfgsrg', function (err, result) {

         if(err){
             resp.json({
                 status: "error",
                 message: err.message,
                 data: null
             });
         }else{

             req.body.userId = result.id;
             next();

         }

     });

};