//Import npm packages
const express = required('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3001;

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
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('tiny'));
app.use('/api', routes);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('pop/build'));
}


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

//Serve static assets if in production
if(process.env.NODE_ENV === 'production') {
  //Set static folder
  app.use(express.static('pop/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve_dirname, 'pop', 'build', 'index.html'));

  });
}

app.listen(process.env.PORT || 3001, function(){
  console.log("Express server listening on port %d in %s mode", 
  this.address().port, app.settings.env);
});