const express = require('express');
const router = express.Router();
const artistController = require('../controllers/artists');

router.get('/', artistController.getAllArtists);
router.post('/', artistController.addArtist);

module.exports = router;