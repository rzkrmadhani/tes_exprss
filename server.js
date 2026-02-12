const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve file statis dari folder public
app.use(express.static('public'));

app.get('/api/status', (req, res) => {
  res.json({ status: 'ACTIVE', uptime: process.uptime() });
});

app.listen(port, () => {
  console.log(`Neon Server running on port ${port}`);
});