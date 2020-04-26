var express = require('express');
var router = express.Router();
const { check, validationResult } = require('express-validator');

const {signout,signup} = require("../controllers/auth");

router.get('/signout',signout);
router.post('/signup',
[
    check('name','Name should be atleast 3 charecter!').isLength({ min: 3 }),
    check('email','Not a valid email').isEmail(),
    // password must be at least 5 chars long
    check('password','Password should be atleast 5 charecter!').isLength({ min: 5 })
]
,signup);

module.exports = router;