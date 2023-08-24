// index.js
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const controlar = require('./controlar'); // Update the path

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect('mongodb://0.0.0.0:27017/task')
  .then(() => {
    console.log('DB Connected.');
  })
  .catch(err => {
    console.error('DB Connection Error:', err);
  });

app.post('/signup', controlar.signup);
app.post('/signin', controlar.signin);
app.listen(8000, () => {
  console.log('Backend Running At Port 8000');
});
