const express = require('express');
require('./db/neonDB');
const cors = require('cors');
const bcrypt = require('bcrypt-nodejs');
require('dotenv').config();
const app = express();
app.use(cors())
app.use(express.json());
const PORT = process.env.PORT || 3000;

app.get('*', (req, res) => {
  res.redirect('/signin')
})

app.post('/register', (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  console.log(firstName, lastName, email, password)

})

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});