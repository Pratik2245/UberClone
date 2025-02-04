const userModel = require("../models/user.model.js");
const createUser = async (firstname, lastname, email, password) => {
  if (!firstname || !email || !password) {
    throw new Error("All Fields Required");
  }
  // if present all feilds then we will create a new user in the data base
  const user = userModel.createUser({
    fullname: {
      firstname,
      lastname,
    },
    email,
    password,
  });
  return user;
};

module.exports = createUser;
