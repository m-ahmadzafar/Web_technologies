const express = require('express');
const mongoose = require("mongoose");
const expressLayouts = require('express-ejs-layouts');
const app = express();

const PORT = process.env.PORT || 3000

// Serve static files from the 'public' directory
app.use(express.static('public'));


//set view engine as i am rendering ejs
app.set('view engine', 'ejs');



// Set up route to serve EJS page
// app.get('/', (req, res) => {
//     res.render('homepage.ejs');
// });

// Use express-ejs-layouts middleware
app.use(expressLayouts);

//route which using layouts
app.get('/', (req, res) => {
  res.render('homepage', { title: 'Home', layout: 'layout' });
});

// app.get('/home', (req, res) => {
//   res.render('homepage.ejs', { title: 'Home', layout: 'layout' });
// });

app.get('/contact-us', (req, res) => {
  res.render('contact-us', { title: 'contact-us', layout: 'layout' });
});

app.get('/about-us', (req, res) => {
  res.render('about-us', { title: 'about-us', layout: 'layout' });
});

app.get('/services', (req, res) => {
  res.render('services', { title: 'services', layout: 'layout' });
});



// Other routes and middleware setup...



// Start the server
app.listen(PORT, () => {
  console.log('Server is running on port ' + PORT);
});