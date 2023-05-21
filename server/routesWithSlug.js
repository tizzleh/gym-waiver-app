const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Define your routes
router.get('/users/:slug', async (req, res) => {
  try {
    const { slug } = req.params;
    const user = await User.findOne({ slug });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    return res.json(user);
  } catch (error) {
    console.error('Error retrieving user:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

// Export the router
module.exports = router;

