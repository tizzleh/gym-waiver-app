const mongoose = require('mongoose');
const User = require('./User.js');

mongoose.connect('mongodb://localhost:27017/gym-waiver-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to the database');

    // Create a new user
    const newUser = new User({
      email: 'johndoe@example.com',
      passwordHash: 'password123',
      firstName: 'John',
      lastName: 'Doe',
      confirmed: false,
      isAdmin: false,
    });

    // Save the user to the database
    newUser.save()
      .then((user) => {
        console.log('User saved:', user);
      })
      .catch((error) => {
        console.error('Error saving user:', error);
      });
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
  });

