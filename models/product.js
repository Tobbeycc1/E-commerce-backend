const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "must be provided"],
  },
  price: {
    type: Number,
    required: [true, "must be provided"],
  },
  featured: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  company: {
    type: String,
    enums: {
      values: ["ikea,", "liddy", "caressa", "marcos"],
      message: `{VALUE} is not supported`,
    },
    // enum: ["ikea,", "liddy", "caressa", "marcos"],
  },
});

module.exports = mongoose.model("Products", productsSchema);
