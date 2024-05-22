//for routes
const express = require('express');
const app = express();
//for db: mongo
const mongoose = require('mongoose');
//for session id
const session = require('express-session');
//for layouts
const expressLayouts = require('express-ejs-layouts');

//apna auth middleware:
const authMiddleware = require('./middlewares/authMiddleware');

//apna edit aur create event user id ka middleware;
const fetchAllUsers = require('./middlewares/fetchAllUsers');

app.use(fetchAllUsers);


//for my mongo db
const uri = "mongodb+srv://admin:1TFz7vrCBorXRblw@cluster0.1git46n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Connect to MongoDB using Mongoose
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err.message));

// the middleware needs to parse the incoming request bodies. (signup nae chalega)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// Set up EJS as the view engine
app.set('view engine', 'ejs');

//to access public files
app.use(express.static('public'));

//since we use express-ejs-layouts
app.use(expressLayouts);

// Use the auth middleware for login, signup and logout.
app.use(authMiddleware);

// Use session
app.use(session({
  secret: 'your_secret_key', // replace with your own secret
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false } // Set to true if using HTTPS
}));


// Make req available to all views //mujhe ye nav k req check k liay chaiyay 
app.use((req, res, next) => {
  res.locals.req = req;
  next();
});


// As i am using seperated route files
app.use('/', require('./routes/authRoutes'));
app.use('/users', require('./routes/userRoutes'));
app.use('/events', require('./routes/eventRoutes'));

//non existent page handler.
app.get('/*', (req,res)=>{
  res.render('404', {
    title: 'Page Not Found',
    css:'/css/404.css',
    script: '',
    layout: 'layouts/mainLayout'});
});



//defining PORT and listening to it.
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});