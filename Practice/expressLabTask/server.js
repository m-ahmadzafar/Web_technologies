const express = require('express');
const app = express();
const path = require('path');

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));


// Set up route to serve EJS page
app.get('/ejs', (req, res) => {
    res.render('index.ejs');
});

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Other routes and middleware setup...

// Start the server
app.listen(4000, () => {
  console.log('Server is running on port 4000');
});


