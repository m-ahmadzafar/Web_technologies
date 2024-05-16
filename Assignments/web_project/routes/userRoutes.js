const express = require('express');
const router = express.Router();


router.get('/profile', (req,res)=> {
    res.render('userProfile', {title: 'User Profile',  layout: 'layouts/mainLayout'});
})

module.exports = router;