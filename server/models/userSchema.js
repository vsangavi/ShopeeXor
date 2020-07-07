const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const registerSchema = new Schema(
  {
    name: {
      type: String,
      minlength: 3,
      trim: true,
      required: true,
    },
    email: {
      unique: true,
      type: String,
      trim: true,
      required: true,
    },
    mobile: {
      type: Number,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      minlength: 6,
      required: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", registerSchema);

module.exports = User;
