const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/ecommerce');
mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
  process.exit(1);
});

// Define routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/buyer', require('./routes/buyer'));
app.use('/api/seller', require('./routes/seller'));

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});




// http://localhost:3000/api/auth/login/register
// http://localhost:3000/api/auth/login
// http://localhost:3000/api/seller/orders
// http://localhost:3000/api/seller/orders/create-catalog