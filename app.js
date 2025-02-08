const express = require('express');
const path = require('path');

const app = express();
const PORT = 4000;

// Middleware to serve static files (CSS, JavaScript, and Images)
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'about.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'contact.html'));
});

// Serve an image directly via a route
app.get('/image', (req, res) => {
  // Ensure correct path formatting for cross-platform compatibility
  const imagePath = path.join(__dirname, 'public', 'images', 'Aarti.jpg');
  res.sendFile(imagePath);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});