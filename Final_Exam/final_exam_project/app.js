const express = require('express');
const app = express();
const mongoose = require('mongoose');
const session = require('express-session');
const expressLayouts = require('express-ejs-layouts');

const User = require('./models/user'); 
const Product = require('./models/product'); 

const authMiddleware = require('./middlewares/authMiddleware');
const fetchAllUsers = require('./middlewares/fetchAllUsers');

app.use(fetchAllUsers);


const uri = "mongodb+srv://admin:1TFz7vrCBorXRblw@cluster0.1git46n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err.message));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(expressLayouts);

app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false }
}));

app.use(authMiddleware);

app.use((req, res, next) => {
  res.locals.req = req;
  next();
});

app.use('/', require('./routes/authRoutes'));
app.use('/users', require('./routes/userRoutes'));
app.use('/events', require('./routes/eventRoutes'));

app.get("/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.render('productspage', { 
        title: 'Products',
        products,
        css: '/css/productspage.css',
        script: '', 
        layout: 'layouts/mainLayout' 
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

app.get("/products/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    // Initialize visitedProducts array in session if it doesn't exist
    if (!req.session.visitedProducts) {
      req.session.visitedProducts = [];
    }

    // Add the current product ID to the visitedProducts array if it's not already there
    if (!req.session.visitedProducts.includes(req.params.id)) {
      req.session.visitedProducts.push(req.params.id);
    }

    res.render('singleproductpage', { 
        title: product.name,
        product,
        css: '/css/singleproductpage.css',
        script: '', 
        layout: 'layouts/mainLayout' 
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

app.get("/visited-products", async (req, res) => {
  try {
    // Retrieve the list of visited product IDs from the session
    const visitedProductIds = req.session.visitedProducts || [];

    // Fetch the corresponding products from the database
    const visitedProducts = await Product.find({ '_id': { $in: visitedProductIds } });

    res.render('visitedproductspage', { 
      title: 'Visited Products',
      products: visitedProducts,
      css: '/css/visitedproductspage.css',
      script: '', 
      layout: 'layouts/mainLayout'
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

app.get('/', async (req, res) => {
  const products = await Product.find();
  res.render('index', { 
    title: 'Home',
    products,
    css: '/css/index.css',
    script: '',
    layout: 'layouts/mainLayout',
  });
});

app.get('/*', (req, res) => {
  res.render('404', {
    title: 'Page Not Found',
    css: '/css/404.css',
    script: '',
    layout: 'layouts/mainLayout'
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});












