const User = require("../models/user");
const BigPromise = require("../middlewares/bigPromise");
const CustomError = require("../utils/customError");
const cloudinary = require("cloudinary");
const cookieToken = require("../utils/cookieToken");
const mailHelper = require("../utils/emailHelper");
const crypto = require("crypto");

exports.signup = BigPromise(async (req, res, next) => {
  const { name, email, password } = req.body;
  if (!email || !name || !password) {
    return next(new CustomError("Name, email and password are required", 400));
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  cookieToken(user, res);
});
