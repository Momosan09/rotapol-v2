const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const PORT = process.env.PORT || 4000;
const DB = process.env.DB || 'mongodb://localhost/rotapol';

mongoose.connect(DB, { useNewUrlParser: true })
  .then(() => console.log('DB conectada @ ' + DB))
  .catch(err => console.log(err));

const app = express();


app.use(express.json());

app.use(express.static('public'));
app.use('/', require('./routes/order'));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});




app.listen(PORT, () => {
  console.log('Server escuchando en puerto ' + PORT);
});
