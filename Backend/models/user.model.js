const mongoose = require("mongoose");
const jwt =require("jsonwebtoken");
const bcrypt =require("bcrypt")
const userSchema = mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      required: true,
      minlength: [3, "First name must be at least 3 characters long"],
    },
    lastname: {
      type: String,
      minlength: [3, "Last name must be at least 3 characters long"],
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: [5, "Email must be at least 5 characters long"],
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  socketId: {
    type: String,
  },
});


//generating the json web token 
userSchema.methods.generateAuthToken()=function(){
  const token=jwt.sign({_id:this._id},process.env.SECRET_KEY);
  return token;
}

userSchema.methods.comparePassword=async function (password) {
  return bcrypt.compare(password,this.password);
}

userSchema.statics.hashPassword=async ()=>{
  return bcrypt.hash(password,10);
}

const userModel = mongoose.model("user", userSchema);
module.exports = userModel;
