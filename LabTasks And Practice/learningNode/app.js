const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const session = require('express-session');
// Set up session middleware
app.use(session({
    secret: 'your-secret-key', // Replace with your secret key
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Set to true if using HTTPS
}));

app.set('view engine', 'ejs');
//so i can parse the form data
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.locals.searchHistory = req.session.searchHistory || [];
    next();
});

app.use(logger);

app.get('/', (req,res)=>{
    const searchHistory = req.session.searchHistory || [];
    res.render('homepage',{title: 'Homepage', input: '', output:'', searchHistory} )
})


app.post('/submit', (req, res) => {
    const input = req.body.input;
    let output = 'wagwan';

    if (input === 'hi') {
        output = 'hello';
    }

    // Initialize search history if it doesn't exist
    if (!req.session.searchHistory) {
        req.session.searchHistory = [];
    }

    // Add the search query to the search history
    req.session.searchHistory.push(input);

    const searchHistory = req.session.searchHistory;
    res.render('homepage', { title: 'EJS Input Example', input: input, output: output, searchHistory });
});

app.get('/another-page', (req, res) => {
    res.render('anotherPage', { title: 'Another Page' });
});

//any thing that comes between the request and response from server is middleware.
//every route is a middleware.
//lets make a simple middleware logger
//we use app.use() for a middleware

//if we want to use a middleware in only one route, we use
// app.get("/", logger, (req,res)=>{})

function logger(req,res,next){
    console.log("before next");
    next()
    //the next will go to next method.then come back and run from this line. like a usual method call.
    console.log("after next");
}
app.listen(3000);