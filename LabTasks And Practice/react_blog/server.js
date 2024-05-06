const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors'); // as they are on different ports



const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
    origin: 'http://localhost:3000',
    // other options
  }));
  

// Middleware to parse JSON requests
app.use(express.json());

// Path to the JSON database file
const dbFilePath = path.resolve(__dirname, 'db.json');

// Read the contents of the database file
const readDatabase = () => {
    const data = fs.readFileSync(dbFilePath, 'utf8');
    return JSON.parse(data);
};

// Write data to the database file
const writeDatabase = (data) => {
    fs.writeFileSync(dbFilePath, JSON.stringify(data, null, 2), 'utf8');
};

// Routes for CRUD operations

// GET all blogs
app.get('/api/blogs', (req, res) => {
    const db = readDatabase();
    res.json(db.blog);
});

// GET a specific blog by ID
app.get('/api/blogs/:id', (req, res) => {
    const db = readDatabase();
    const blogId = parseInt(req.params.id);
    const blog = db.blog.find(blog => blog.id === blogId);
    if (blog) {
        res.json(blog);
    } else {
        res.status(404).json({ message: 'Blog not found' });
    }
});

// POST a new blog
app.post('/api/blogs', (req, res) => {
    const db = readDatabase();
    const newBlog = req.body;
    newBlog.id = Date.now(); // Generate a unique ID (timestamp)
    db.blog.push(newBlog);
    writeDatabase(db);
    res.status(201).json(newBlog);
});

// PUT (update) a blog
app.put('/api/blogs/:id', (req, res) => {
    const db = readDatabase();
    const blogId = parseInt(req.params.id);
    const index = db.blog.findIndex(blog => blog.id === blogId);
    if (index !== -1) {
        db.blog[index] = { ...db.blog[index], ...req.body };
        writeDatabase(db);
        res.json(db.blog[index]);
    } else {
        res.status(404).json({ message: 'Blog not found' });
    }
});

// DELETE a blog
app.delete('/api/blogs/:id', (req, res) => {
    const db = readDatabase();
    const blogId = parseInt(req.params.id);
    const index = db.blog.findIndex(blog => blog.id === blogId);
    if (index !== -1) {
        db.blog.splice(index, 1);
        writeDatabase(db);
        res.json({ message: 'Blog deleted' });
    } else {
        res.status(404).json({ message: 'Blog not found' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
