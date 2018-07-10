const jwt = require('jsonwebtoken');

exports.validateUser = function (req, resp, next) {

     jwt.verify(req.headers['x-access-token'], req.app.get('secretKey'), function (err, result) {

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