const Order = require("../models/order");
const Product = require("../models/product");
const BigPromise = require("../middlewares/bigPromise");
const CustomError = require("../utils/customError");

exports.createOrder = BigPromise(async (req, res, next) => {
  const { shippingInfo } = req.body;
  const user = req.user;
  const cart = user.cart;

  // Check if cart is empty
  if (cart.length === 0) {
    return next(new CustomError("Your cart is empty", 400));
  }

  // Calculate total price
  let totalPrice = 0;
  for (let i = 0; i < cart.length; i++) {
    const product = await Product.findById(cart[i].product);
    if (!product) {
      return next(new CustomError("Product not found", 404));
    }
    totalPrice += product.price * cart[i].quantity;
  }

  // Create order
  const order = new Order({
    shippingInfo,
    user: user._id,
    products: cart.map((cp) => ({
      product: cp.product,
      quantity: cp.quantity,
      price: cp.price,
    })),
    totalAmount: totalPrice,
  });
  await order.save();

  // Clear cart
  user.cart = [];
  await user.save();

  res.status(200).json({
    success: true,
    order,
  });
});
