import mongoose, { InferSchemaType } from "mongoose";

export const shoppingListItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  unit: {
    type: String,
    required: true,
  },
  checked: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

export type ShoppingListItem = InferSchemaType<typeof shoppingListItemSchema>;
