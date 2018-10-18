const express = require('express');
const router = express.Router;

const UserControllers = require('../controllers/users');

router.route('/signup')
    .post(UserControllers.signUp);

router.route('/signin')
    .post(UserControllers.signIn);

router.route('/secret')
    .get(UserControllers.secret);

module.exports = router;
