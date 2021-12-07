const express = require('express');
const mongoose = require('mongoose');

const PORT = 4000;
const DB = 'mongodb://localhost/rotapol';

mongoose.connect(DB, { useNewUrlParser: true })
  .then(() => console.log('DB conectada @ ' + DB))
  .catch(err => console.log(err));

const app = express();


app.use(express.json());
app.use('/', require('./routes/order'));

app.listen(PORT, () => {
  console.log('Server escuchando en puerto ' + PORT);
});
