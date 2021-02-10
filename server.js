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

//Routes
// app.post('/api/form', (req, res) => {
//   console.log(req.body)
//   nodemailer.createTestAccount((err, account) => {
//     const htmlEmail = `
//     <h3>Contact Details</h3>
//     <ul>
//       <li>Name:  ${req.body.name}</li>
//       <li>Name:  ${req.body.email}</li>
//       <li>Name:  ${req.body.company}</li>
//     </ul>
//     <h3>Message</h3>
//     <p>${req.body.message}</p>
//     `

//     let transporter = nodemailer.createTransport({
//       host: 'smtp.ethereal.email',
//       port: 587,
//       secure: false,
//       auth: {
//         user: 'sls2code@gmail.com',
//         pass: 'Florida90!'
//       }
//     });
//     let mailOptions = {
//       from: 'test@testaccount.com',
//       to: 'sls2code@gmail.com',
//       replyTo: 'text@testaccount.com',
//       subject: 'New Message',
//       text: req.body.message,
//       html: htmlEmail
//     }
//     transporter.sendMail(mailOptions, (err, info) => {
//       if (err) {
//       return console.log(err)
//       }
//       console.log('Message sent: %s', info.message)
//       console.log('Message URL: %s', nodemailer.getTestMessageUrl(info))
//     })
//   })
// })

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
    res.sendFile(path.resolve_dirname, 'client', 'build', 'index.html'));

  });
}

app.listen(process.env.PORT || 3001, function(){
  console.log("Express server listening on port %d in %s mode", 
  this.address().port, app.settings.env);
});