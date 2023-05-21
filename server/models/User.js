const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  // Define the fields for the signature data
  firstName: String,
  lastName: String,
  // Add more fields as needed
  signatureData: String,
});

export default mongoose.model("User", userSchema);

