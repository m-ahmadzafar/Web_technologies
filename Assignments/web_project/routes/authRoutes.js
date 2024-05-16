const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { 
    title: 'Home',
    css: '<link rel="stylesheet" href="/css/index.css">',
    scripts: '<script src="/js/index.js"></script>', 
    layout: 'layouts/mainLayout' });
});

router.get('/signup', (req, res) => {
    res.render('signup', {title: 'Sign Up', layout: 'layouts/mainLayout'});
})

router.post('/signup', (req, res) => {
    // Placeholder for signup logic
    res.send('Signup functionality will be implemented here');
  });

router.get('/login', (req, res) => {
    res.render('login', {title: 'Log In', layout: 'layouts/mainLayout'});
})

router.post('/login', (req, res) => {
    // Placeholder for login logic
    res.send('Login functionality will be implemented here');
  });
  
  // Logout route
  router.get('/logout', (req, res) => {
    // Placeholder for logout logic
    res.send('Logout functionality will be implemented here');
  });

  
  module.exports = router;