const router = require('express').Router();
const {isAuthorized, isVerified} = require('../config/authCheck');
const Users = require('../models/Users');
const Register = require('../models/Register');

router.get('/', isAuthorized, isVerified, (req,res)=>{
    res.render('register');
})

module.exports = router