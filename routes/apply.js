const router = require('express').Router();
const {isAuthorized, isVerified} = require('../config/authCheck');
const Users = require('../models/Users');
const Posts = require('../models/Posts');

router.get('/', isAuthorized, isVerified, (req,res)=>{
    res.render('register');
})

module.exports = router