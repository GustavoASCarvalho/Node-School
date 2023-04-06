import { Schema } from "mongoose";
import mongoose from "mongoose";

export const ProductSchema = new Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

export const Product = mongoose.model("Product", ProductSchema);
