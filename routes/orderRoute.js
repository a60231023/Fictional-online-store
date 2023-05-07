const express = require("express");
const router = express.Router();
const { isLoggedIn, customRole } = require("../middlewares/auth");
const { createOrder } = require("../controllers/orderController");


router.post("/order", isLoggedIn, createOrder);

module.exports = router;
