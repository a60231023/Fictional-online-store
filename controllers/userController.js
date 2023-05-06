const User = require("../models/user");
const BigPromise = require("../middlewares/bigPromise");
const CustomError = require("../utils/customError");
const cloudinary = require("cloudinary");
const cookieToken = require("../utils/cookieToken");
const crypto = require("crypto");

//signup logic for the user
exports.signup = BigPromise(async (req, res, next) => {
  //take the data from body
  const { name, email, password } = req.body;
  // check for presence of email, name and password
  if (!email || !name || !password) {
    return next(new CustomError("Name, email and password are required", 400));
  }

  // we create the user

  const user = await User.create({
    name,
    email,
    password,
  });

  // if all goes good and we send the token
  cookieToken(user, res);
});

//login logic for the user
exports.login = BigPromise(async (req, res, next) => {
  const { email, password } = req.body;

  // check for presence of email and password
  if (!email || !password) {
    return next(new CustomError("please provide email and password", 400));
  }

  // get user from DB
  const user = await User.findOne({ email }).select("+password");

  // if user not found in DB
  if (!user) {
    return next(
      new CustomError("Email or password does not match or exist", 400)
    );
  }

  // match the password
  const isPasswordCorrect = await user.isVaildatePassword(password);

  //if password do not match
  if (!isPasswordCorrect) {
    return next(
      new CustomError("Email or password does not match or exist", 400)
    );
  }

  // if all goes good and we send the token
  cookieToken(user, res);
});

//logout functionality for the user
exports.logout = BigPromise(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "logout success",
  });
});
