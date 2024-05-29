// testDataInsertion.js

const mongoose = require('mongoose');
const Product = require('./models/product'); // adjust the path if necessary

const uri = "mongodb+srv://admin:1TFz7vrCBorXRblw@cluster0.1git46n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Connect to MongoDB using Mongoose
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err.message));

// Define some test data
const testProducts = [
  {
    name: 'Product 1',
    description: 'Description for Product 1',
    price: 19.99,
    category: 'Category A',
    isFeatured: true
  },
  {
    name: 'Product 2',
    description: 'Description for Product 2',
    price: 29.99,
    category: 'Category B',
    isFeatured: false
  },
  {
    name: 'Product 3',
    description: 'Description for Product 3',
    price: 39.99,
    category: 'Category A',
    isFeatured: true
  },
  {
    name: 'Product 4',
    description: 'Description for Product 4',
    price: 49.99,
    category: 'Category C',
    isFeatured: false
  },
  {
    name: 'Product 5',
    description: 'Description for Product 5',
    price: 59.99,
    category: 'Category B',
    isFeatured: true
  }
];

// Insert the test data
Product.insertMany(testProducts)
  .then((docs) => {
    console.log('Test data inserted successfully:', docs);
  })
  .catch((error) => {
    console.error('Error inserting test data:', error);
  })
  .finally(() => {
    mongoose.connection.close();
  });
