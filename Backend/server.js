const express = require('express');
const app = express();
const cors = require('cors')

const db = {
  users: [
    {
      id: 1,
      name: "alireza",
      email: "alireza@gmail.com",
      password: "123",
      joined: new Date()
    }
  ]
}

app.use(cors())
app.use(express.json());

app.get('*', (req, res) => {
  res.redirect('/signin')
})

app.post('/register', (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  console.log(firstName, lastName, email, password)

})

app.listen(5000, () => {
  console.log('Server started on port 5000');
});
