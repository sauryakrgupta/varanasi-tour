require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Initialize app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({ origin: process.env.FRONTEND_URL || 'http://localhost:8080' }));
app.use(express.json());

// Database Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB via Atlas'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
const Review = require('./models/Review');

// GET all reviews
app.get('/api/reviews', async (req, res) => {
  try {
    const reviews = await Review.find().sort({ createdAt: -1 });
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch reviews' });
  }
});

// POST a new review
app.post('/api/reviews', async (req, res) => {
  try {
    const { reviewerName, country, rating, comment } = req.body;
    if (!reviewerName || !rating || !comment) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const newReview = new Review({ reviewerName, country, rating, comment });
    await newReview.save();
    
    res.status(201).json(newReview);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create review' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
