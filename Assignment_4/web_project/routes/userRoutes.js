const express = require('express');
const router = express.Router();
const User = require('../models/user');

  
router.get('/profile', async (req, res) => {
    if (!req.session.userId) {
      return res.redirect('/login');
    }
  
    const user = await User.findById(req.session.userId);
    if (!user) {
      return res.redirect('/login');
    }
  
    res.render('userProfile', { 
      title: 'Profile', 
      css: '/css/userProfile.css',
      script: '/js/userProfile.js', 
      user: user,
      layout: 'layouts/mainLayout',
    });
  });

  router.post('/profile', async (req, res) => {
    if (!req.session.userId) {
      return res.status(401).send('Unauthorized');
    }
  
    const { name, email, region, company } = req.body;
    
    try {
      const user = await User.findById(req.session.userId);
      user.name = name;
      user.email = email;
      user.region = region;
      user.company = company;
      
      await user.save();
      
      res.json({ message: 'Profile updated successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });

module.exports = router;