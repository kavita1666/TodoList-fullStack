const AuthController = require('../controllers/authController');

const router = require('express').Router();

router.post('/register', AuthController.userRegister);

module.exports = router;