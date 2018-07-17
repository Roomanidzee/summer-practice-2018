const userController = require('../controllers/user');

const express = require('express');
const router = express.Router();

router.post('/register', userController.registerForm);
router.get('/index', userController.indexPage);
router.get('/result', userController.resultPage);

module.exports = router;