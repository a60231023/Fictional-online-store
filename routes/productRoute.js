const express = require("express");
const router = express.Router();
const {
  testProduct,
  addProduct,
  getAllProduct,
  getOneProduct,
} = require("../controllers/productController");
const { isLoggedIn, customRole } = require("../middlewares/auth");

router.get("/testProduct", testProduct);
router.get("/products", getAllProduct);
router.get("/product/:id", getOneProduct);

router.post("/admin/product/add", isLoggedIn, customRole("admin"), addProduct);

module.exports = router;
