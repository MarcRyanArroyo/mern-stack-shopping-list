const express = require('express');
const mongoose = require('mongoose');
//body parser now included in express 4.16+ version
//const bodyParser = require('body-parser');
const items = require('./routes/api/items');
const path = require('path');

const app = express();

//body parser uing express
app.use(express.json());

//DB config
const db = require('./config/keys').mongoURI;

//Connect to MongoDB using mongoose
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

//use Routes
app.use('/api/items', items);

//use this code if app will deploy online
//serve front-end  if in production
/*
if (process.env.NODE_ENV === 'production') {
  //serve static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}
*/
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server Started on port ${port}`));
