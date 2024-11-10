const express = require('express');
const mongoose = require('mongoose');
const Dish = require('./Dish'); 
const cors = require('cors');
require('dotenv').config();

// Initialize express app
const app = express();

// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs");

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/restaurant555', {})
  .then(() => console.log('Connected to MongoDB'))
  .catch(error => console.error('Connection error:', error));

// Routes

// Home route - Fetch and display dishes
app.get('/', async (req, res) => {
    try {
        const dishes = await Dish.find({});
        res.render('home', { dishes });
    } catch (error) {
        res.status(500).send('Error fetching dishes');
    }
});

// API route to fetch all dishes in JSON format
app.get('/api/dishes', async (req, res) => {
    try {
        const dishes = await Dish.find({});
        res.json(dishes);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch dishes' });
    }
});

// Form route to create new dish
app.get('/form', (req, res) => {
    res.render('form');
});

// API route to add a new dish
app.post('/api/dishes', async (req, res) => {
    try {
        const { dishName, price, image } = req.body;
        const dish = new Dish({ dishName, price, image });
        await dish.save();
        res.status(201).json(dish);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create dish' });
    }
});

// API route to delete a dish
app.delete('/api/dishes/:id', async (req, res) => {
    try {
        await Dish.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Dish deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete dish' });
    }
});

// API route to update a dish
app.put('/api/dishes/:id', async (req, res) => {
    try {
        const { dishName, price, image } = req.body;
        const updatedDish = await Dish.findByIdAndUpdate(req.params.id, { dishName, price, image }, { new: true });
        res.status(200).json(updatedDish);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update dish' });
    }
});

// Route for form submission to create a new dish
app.post('/dishes', async (req, res) => {
    const { dishName, price, image } = req.body;
    const dish = new Dish({ dishName, price, image });
    await dish.save();
    res.redirect('/');
});

// Route to delete a dish from the homepage
app.post('/dishes/delete/:id', async (req, res) => {
    await Dish.findByIdAndDelete(req.params.id);
    res.redirect('/');
});

// Route to edit a dish
app.get('/dishes/edit/:id', async (req, res) => {
    const dish = await Dish.findById(req.params.id);
    res.render('edit', { dish });
});

// Route to update a dish
app.post('/dishes/update/:id', async (req, res) => {
    const { dishName, price, image } = req.body;
    await Dish.findByIdAndUpdate(req.params.id, { dishName, price, image });
    res.redirect('/');
});

const Port=process.env.PORT||1702
app.listen(Port, () => {
    console.log('Server running on port 1702');
});
