const express = require("express");
const router = express.Router();
const {
  testProduct,
  addProduct,
  getAllProduct,
  getOneProduct,
  adminDeleteOneProduct,
  adminUpdateOneProduct,
} = require("../controllers/productController");
const { isLoggedIn, customRole } = require("../middlewares/auth");

//user -- get product details
router.get("/testProduct", testProduct);
router.get("/products", getAllProduct);
router.get("/product/:id", getOneProduct);

//admin -- product modify routes
router.post("/admin/product/add", isLoggedIn, customRole("admin"), addProduct);
router.put(
  "/admin/product/update/:id",
  isLoggedIn,
  customRole("admin"),
  adminUpdateOneProduct
);
router.delete(
  "/admin/product/delete/:id",
  isLoggedIn,
  customRole("admin"),
  adminDeleteOneProduct
);

module.exports = router;
