const express = require("express");
const router = express.Router();
const { isLoggedIn, customRole } = require("../middlewares/auth");
const {
  createOrder,
  getLoggedInOrders,
  getOneOrder,
  adminGetAllOrders,
  adminDeleteOrder,
} = require("../controllers/orderController");

//all user
router.post("/order", isLoggedIn, createOrder);
router.get("/getOrder", isLoggedIn, getLoggedInOrders);

//admin routes
router.get("/admin/order/:id", isLoggedIn, customRole("admin"), getOneOrder);
router.get("/admin/order", isLoggedIn, customRole("admin"), adminGetAllOrders);
router.delete(
  "/admin/order/:id",
  isLoggedIn,
  customRole("admin"),
  adminDeleteOrder
);

module.exports = router;
