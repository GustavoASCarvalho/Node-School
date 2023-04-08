import mongoose, { InferSchemaType, Schema } from "mongoose";

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

export type Product = InferSchemaType<typeof ProductSchema>;

export const ProductModel = mongoose.model("Product", ProductSchema);
