const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  nickname: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    minlength: 5,
  },
  salt: {
    type: String,
    minlength: 5,
  },
  sex: {
    type: String,
  },
  want_region: {
    type: String,
  },
  want_vol: {
    type: String,
  },
  age: {
    type: String,
  },
  is_company: {
    type: Boolean,
  },
  is_open: {
    type: Boolean,
    default: true,
  },
});

// userSchema.plugin(findOrCreate);
module.exports = mongoose.model("User", userSchema);
