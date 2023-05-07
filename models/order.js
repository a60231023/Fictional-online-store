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
  orderItems: [
    {
      name: {
        type: String,
        required: [true, "name of product is needed"],
      },
      quantity: {
        type: Number,
        required: [true, "number of product is needed"],
      },
      image: {
        type: String,
        required: [true, "url of product image is needed"],
      },
      price: {
        type: Number,
        required: [true, "price of product is needed"],
      },
      product: {
        type: mongoose.Schema.ObjectId,
        ref: "Product",
        required: [true, "product is needed"],
      },
    },
  ],
  paymentInfo: {
    id: {
        type: String 
    }
  },
  totalAmount: {
    type: Number,
    required: [true, 'Total amount is required']
  },
  orderStatus: {
    type: String,
    required: true,
    default: 'processing'
  },
  deliveredAt: {
    type: Date
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});


module.exports = mongoose.model('Order', orderSchema);