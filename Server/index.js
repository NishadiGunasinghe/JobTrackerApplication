// Starts Express and imports routes
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Import routes
const userRoutes = require('./routes/users');
app.use('/api/users', userRoutes);

app.listen(5000, () => {
  console.log('🚀 Server running on http://localhost:5000');
});
