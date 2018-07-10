const artistModel = require('../models/artist');

exports.getAllArtists = function (req, resp, next) {

    let artistsList = [];

    artistModel.find({}, function (err, artists) {

        if(err){
            next(err);
        }else{

            for(let artist of artists){

                artistsList.push({

                   id: artist._id,
                   nickname: artist.nickname,
                   age: artist.age

                });

            }

            resp.json({

                status: "success",
                message: "Here are the artists",
                data: {
                    artists: artistsList
                }

            });

        }

    });

};

exports.addArtist = function (req, resp, next) {

    artistModel.create({

        nickname: req.body.nickname,
        age: req.body.age

    }, function (err, result) {

        if(err){
            next(err);
        }else{

            resp.json({

                status: "success",
                message: "Artist added",
                data: null

            });

        }

    });

};