const express = require('express');
const path = require('path');
const app = express();

// Force www redirect in production
app.use((req, res, next) => {
  const host = req.headers.host || '';
  if (host === 'arcdispatch.com') {
    return res.redirect(301, `https://www.arcdispatch.com${req.url}`);
  }
  next();
});

// Serve static files from root
app.use(express.static(__dirname));

// Clean URL: /activation → activation.html
app.get('/activation', (req, res) => {
  res.sendFile(path.join(__dirname, 'activation.html'));
});

// Catch-all → homepage
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`ARC Marketing live on port ${PORT}`));
