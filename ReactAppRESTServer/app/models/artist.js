const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArtistSchema = new Schema({

   nickname: {

       type: String,
       trim: true,
       required: true

   },

   age: {

       type: Number,
       default: 18

   }

});

module.exports = mongoose.model('Artist', ArtistSchema);