const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/expense', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('✅ Connected to MongoDB');
}).catch((err) => {
    console.error('❌ MongoDB connection failed:', err);
});

// Schema
const formSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    country: String,
    street: String,
    city: String,
    region: String,
    postalCode: String
});

const FormData = mongoose.model('FormData', formSchema);

// Save API
app.post('/save', async (req, res) => {
    try {
        const newEntry = new FormData(req.body);
        await newEntry.save();
        res.json({ message: 'Data saved to MongoDB!' });
    } catch (error) {
        console.error('❌ Error saving data:', error);
        res.status(500).json({ error: 'Saving failed' });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
