const express = require('express');
const path = require('path');
const app = express();

// Update the static files path
app.use(express.static(path.join(__dirname, 'home')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'home', 'index.html'));
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
