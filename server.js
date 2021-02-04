//Import npm packages
const express = required('express');
const mongoose = require('mongoose');
const morgan = requir('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

//HTTP request logger
app.use(morgan('tiny'));

//Routes
app.get('/api', (req, res) => {
  const data = {
    username: 'accimeesterlin',
    age: 5
  };
  res.json(data);
});

app.get('/api/name', (req, res) => {
  const data = {
    username: 'peterson',
    age: 5
  };
  res.json(data);
});

app.listn(PORT, console.log(`Server is starting at ${PORT}`));