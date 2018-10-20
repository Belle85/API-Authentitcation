const express = require('express');
const router = require('express-promise-router')();
// const router = express.Router;
//The line above is uneccessary when using express-promise-router

const {validateBody, schemas } = require('../helpers/routesHelpers')
const UserControllers = require('../controllers/users');

router.route('/signup')
    .post(validateBody(schemas.authSchema), UserControllers.signUp);

router.route('/signin')
    .post(UserControllers.signIn);

router.route('/secret')
    .get(UserControllers.secret);

module.exports = router;
