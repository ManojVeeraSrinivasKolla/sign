// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const User = require('./userModel');

const app = express();
const port = 3001;



mongoose.connect("mongodb+srv://yesubu:yesubu123@cluster0.8eicsvr.mongodb.net/yourDatabaseName?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('DB connected');
  })
  .catch((err) => {
    console.error('Error connecting to the database:', err);
  });



app.use(bodyParser.json());

app.post('/register', async (req, res) => {
  try {
    const { name, email, password, blood, mobileNumber, dateOfBirth, details } = req.body;

    const newUser = new User({
      name,
      email,
      password,
      blood,
      mobileNumber,
      dateOfBirth,
      details,
    });

    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'Error registering user' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
