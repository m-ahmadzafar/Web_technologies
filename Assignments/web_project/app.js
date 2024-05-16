//for routes
const express = require('express');
//for db: mongo
const mongoose = require('mongoose');
//for session id
const session = require('express-session');
//for layouts
const expressLayouts = require('express-ejs-layouts');

const app = express();

// Set up EJS as the view engine
app.set('view engine', 'ejs');

//to access public files
app.use(express.static('public'));

//since we use express-ejs-layouts
app.use(expressLayouts);

// As i am using seperated route files
app.use('/', require('./routes/authRoutes'));
app.use('/users', require('./routes/userRoutes'));
app.use('/events', require('./routes/eventRoutes'));

//defining PORT and listening to it.
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});