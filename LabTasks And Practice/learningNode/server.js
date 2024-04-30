// const http = require('http');
//const path = require('path'); //we still need this with express
// const fs = require('fs');

// const PORT =  process.env.PORT || 3000;

// const server = http.createServer((req,res) => {
//     console.log(req.url, req.method);
// });

// server.listen(PORT, ()=> console.log("Server is running on port:" + PORT))
// we dont want to write each path and req res. so we use express.


const path = require('path'); //we still need this with express
const express = require('express'); //we get the express dependancy
const app = express();


const PORT =  process.env.PORT || 3000;

// app.get("/", (req, res) => {
//     //res.send('hello chad');
//     res.sendFile(path.join(__dirname, "views", "index.html"));
    
// });

app.get("/404", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "404.html"));
    
});

//express allows us to use reg exp for using various paths for ourselves
app.get('^/$|/index(.html)?', (req, res) => {
    //res.send('hello chad');
    res.sendFile(path.join(__dirname, "views", "index.html"));    
});

// now lets say we have an old page and then we made a new one BUT
// the client is requesting with the  url to the old page. so we can do something like
app.get('^/$|/old-page(.html)?', (req, res) => {
    res.redirect(301, './index.html');    //302 by default. 
});

// say that we want to use next and send the route handle to the 
// next handler for something

app.get('/hello(.html)?', (req, res, next) => {
    console.log("attempted to load hello.html");
    next();

}, (req, res) => {
    res.send("Hello. i am the next method txt.")
});


// we use a different, more common syntax for using next as well.
// we can use a default route so that if we give any route except defined ones,
// then we will show the 404 
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, "views", "404.html"));    
});




app.listen(PORT, ()=> console.log("Server is running on port:" + PORT))