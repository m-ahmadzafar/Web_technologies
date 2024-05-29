const express = require('express');
const router = express.Router();
const User = require('../models/user'); 
const bcrypt = require('bcryptjs');

router.get('/', (req, res) => {
  res.render('index', { 
    title: 'Home',
    css: '/css/index.css',
    script: '',
    layout: 'layouts/mainLayout',
  });
});

router.get('/signup', (req, res) => {
  res.render('signup', { 
    title: 'Sign Up',
    css: '/css/signup.css',
    script:'', 
    layout: 'layouts/mainLayout', req: req });
});



router.post('/signup', async (req, res) => {
  const { name, email, password, region, company } = req.body;
  
  // Check if user already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
      return res.status(400).send('User already exists');
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create a new user
  const newUser = new User({
      name,
      email,
      password: hashedPassword,
      region,
      company
  });

  // Save the user to the database
  await newUser.save();

  // Redirect to home page
  res.redirect('/login');
});

// Login form route
router.get('/login', (req, res) => {
  res.render('login', { 
    title: 'Log In', 
    css: '/css/login.css',
    script: '',
    layout: 'layouts/mainLayout', 
    req: req 
  });
});

// Login submission route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.render('login', {
        title: 'Log In',
        css: '/css/login.css',
        script: '',
        error: 'Invalid email or password',
        layout: 'layouts/mainLayout',
        req: req
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.render('login', {
        title: 'Log In',
        css: '/css/login.css',
        script: '',
        error: 'Invalid email or password',
        layout: 'layouts/mainLayout',
        req: req
      });
    }

    req.session.userId = user._id; 
    res.redirect('/users/profile'); // Redirect to profile after login
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});


router.get('/logout', (req, res) => {
  // req.session.user = null;
  // res.redirect('/login'); 
  req.session.destroy(err => {
      if (err) {
          console.error(err);
          res.status(500).send('Internal Server Error');
      } else {
          res.redirect('/login'); 
      }
  });
});
  
module.exports = router;
 

