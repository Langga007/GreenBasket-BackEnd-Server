const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  quantity: {
    type: String,
    required: [true, "Quantity is required"],
  },
  category: {
    type: String,
    required: [true, "Category is required"],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  createdOn: {
    type: Date,
    default: Date.now,
  },
  images: {
    type: [String],
  }
});

module.exports = mongoose.model("Product", productSchema);
