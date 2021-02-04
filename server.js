//Import npm packages
const express = required('express');
const mongoose = require('mongoose');
const morgan = requir('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

const routes = require('./routes/api');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/ssmith-portfolio', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!!!');
});

//Data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//HTTP request logger
app.use(morgan('tiny'));
app.use('/api', routes);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('pop/build'));
}

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