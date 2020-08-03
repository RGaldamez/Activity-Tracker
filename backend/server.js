require('dotenv').config();
const db = require('./db/db');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

db.authenticate()
  .then(() => {
    console.log('Connected to database');
  })
  .catch((error) => {
    console.error('Connection to database failed', error.message);
  });

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

app.get('/', (req, res) => {
  res.send('Backend Server is running');
});
