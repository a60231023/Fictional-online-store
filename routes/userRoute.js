const express = require("express");
const router = express.Router();
const {
  signup,
  login,
  logout,
  forgotPassword,
  passwordReset,
  getLoggedInUserDetails,
  changePassword,
  updateUserDetails,
  adminAllUser,
  admingetOneUser,
  adminUpdateOneUserDetails,
  adminDeleteOneUser,
  addToCart,
} = require("../controllers/userController");

const { isLoggedIn, customRole } = require("../middlewares/auth");

//user routes
router.post("/signup", signup);
router.post("/login", login);
router.get("/logout", logout);
router.post("/forgotPassword", forgotPassword);
router.post("/password/reset/:token", passwordReset);
router.get("/userdashboard", isLoggedIn, getLoggedInUserDetails);
router.post("/password/update", isLoggedIn, changePassword);
router.post("/userdashboard/update", isLoggedIn, updateUserDetails);
router.post("/addToCart", isLoggedIn, addToCart);

//admin only routes
router.get("/admin/users", isLoggedIn, customRole("admin"), adminAllUser);
router.get("/admin/user/:id", isLoggedIn, customRole("admin"), admingetOneUser);
router.put(
  "/admin/user/:id",
  isLoggedIn,
  customRole("admin"),
  adminUpdateOneUserDetails
);
router.delete(
  "/admin/user/:id",
  isLoggedIn,
  customRole("admin"),
  adminDeleteOneUser
);

module.exports = router;
