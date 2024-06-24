const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  //uid is id of user has saved on firebase authentication, it is instead of ObjectID in mongoDB
  uid: {
    type: String,
    required: true,
  },
  displayName: {
    type: String,
    required: true,
    default: "Tài khoản",
  },
  email:{
    type:String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  
  company: {
    type: String,
  },
  company_address: {
    type: String,
  },
  company_website: {
    type: String,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", userSchema);
