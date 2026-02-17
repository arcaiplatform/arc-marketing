const express = require('express');
const path = require('path');
const app = express();

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Clean URL: /activation → activation.html
app.get('/activation', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'activation.html'));
});

// Catch-all → homepage
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`ARC Marketing live on port ${PORT}`));
