const expres = require("express");
const router = expres.Router();
const user = require('../controllers/userControllers');
const { check } = require('express-validator');


router.post("/login", 
    [
        check('email', 'The email is required').not().isEmpty(),
        check('password', 'The password is required').not().isEmpty(),
    ],
    user.logIn
);

router.post("/register",
    [
        check('email', 'The email is required').not().isEmpty(),
        check('email', 'Email not valid').isEmail(),
        check('password', 'The password is required').not().isEmpty(),
        check('password', 'The password min 6 characters').isLength({min: 6})
    ],
    user.checkEmail,
    user.createUser
);

module.exports = router;