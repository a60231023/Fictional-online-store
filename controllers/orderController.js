const Order = require("../models/order");
const Product = require("../models/product");
const BigPromise = require("../middlewares/bigPromise");
const CustomError = require("../utils/customError");

//create order -- all user
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

//get order of logged in user -- user
exports.getLoggedInOrders = BigPromise(async (req, res, next) => {
  const order = await Order.find({ user: req.user._id });

  if (!order) {
    return next(new CustomError("No order", 401));
  }

  res.status(200).json({
    success: true,
    order,
  });
});

//get one order -- admin
exports.getOneOrder = BigPromise(async (req, res, next) => {
    const order = await Order.findById(req.params.id).populate(
      "user",
      "name email"
    );
  
    if (!order) {
      return next(new CustomError("please check order id", 401));
    }
  
    res.status(200).json({
      success: true,
      order,
    });
  });
  
//get all orders -- admin
exports.adminGetAllOrders = BigPromise(async (req, res, next) => {
  const orders = await Order.find();

  res.status(200).json({
    success: true,
    orders,
  });
});

//delete order -- admin
exports.adminDeleteOrder = BigPromise(async (req, res, next) => {
    const result = await Order.deleteOne({ _id: req.params.id });

    if (result.deletedCount === 0) {
      return next(new CustomError("No Such order found", 401));
    }
  
  res.status(200).json({
    success: true,
  });
});
