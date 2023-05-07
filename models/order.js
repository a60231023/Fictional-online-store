const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  shippingInfo: {
    address: {
      type: String,
      required: [true, "Please provide address"],
    },
    phoneNumber: {
      type: Number,
      required: [true, "Please provide phone number"],
    },
    city: {
      type: String,
      required: [true, "Please provide city name"],
    },
    state: {
      type: String,
      required: [true, "Please provide state name"],
    },
    country: {
      type: String,
      required: [true, "Please provide country name"],
    },
    postalCode: {
      type: Number,
      required: [true, "Please provide postal code"],
    },
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: [true, "User is needed"],
  },
  products: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
        min: [1, "Quantity can not be less than 1."],
      },
      price: {
        type: Number,
        required: true,
        min: [0, "Price can not be less than 0."],
      },
    },
  ],
  totalAmount: {
    type: Number,
    required: true,
    min: [0, "Total amount can not be less than 0."],
  },
  status: {
    type: String,
    enum: ["placed", "shipped", "delivered"],
    default: "placed",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Order", orderSchema);
