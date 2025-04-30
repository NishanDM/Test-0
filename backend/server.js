const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const Item = require('./models/Item');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Ensure uploads folder exists
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

// Serve uploaded images
app.use('/uploads', express.static(uploadsDir));

// Serve static frontend files from ../public
app.use(express.static(path.join(__dirname, '../public')));

// Connect to MongoDB (clean version)
mongoose.connect('mongodb+srv://nishandm97:xr37u5tcygJNBH8F@cluster-1.wpmzbrq.mongodb.net/TEST?retryWrites=true&w=majority')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));


// Multer setup for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + '-' + file.originalname;
    cb(null, uniqueName);
  }
});
const upload = multer({ storage: storage });

// POST /api/items - Add new item
app.post('/api/items', upload.single('image'), async (req, res) => {
  try {
    const { name, description, price, warranty } = req.body;
    const imagePath = req.file ? `/uploads/${req.file.filename}` : '';

    const newItem = new Item({
      name,
      image: imagePath,
      description,
      price,
      warranty
    });

    await newItem.save();
    res.status(201).json({ message: 'Item saved successfully', item: newItem });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to save item' });
  }
});

// GET /api/items - Fetch all items
app.get('/api/items', async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch items' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
