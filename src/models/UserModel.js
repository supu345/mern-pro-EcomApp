const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    email: { type: String, unique: true, required: true, lowercase: true },
    otp: String,
  },
  { timestamps: true, versionKey: false }
);

const UserModel = mongoose.model("users", UserSchema);

module.exports = UserModel;
