const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/boxdelivery')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Mongoose schema
const DeliverySchema = new mongoose.Schema({
  pickup_line0: String,
  pickup_line1: String,
  pickup_line2: String,
  pickup_block: String,
  pickup_wing: String,
  pickup_contact: String,
  drop_line1: String,
  drop_line2: String,
  drop_block: String,
  drop_wing: String,
  drop_contact: String
});

const Delivery = mongoose.model('Delivery', DeliverySchema);

// Handle form submission
app.post('/submit-address', async (req, res) => {
  try {
    const delivery = new Delivery(req.body);
    await delivery.save();
    res.status(200).json({ message: 'Success' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
