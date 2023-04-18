import mongoose, { InferSchemaType } from "mongoose";
import { shoppingListItemSchema } from "./shoppingListItem.model";

const shoppingListSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  users: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  ],
  createdAt: {
    type: Date,
    default: new Date(),
  },
  items: [shoppingListItemSchema],
});

export type ShoppingList = InferSchemaType<typeof shoppingListSchema>;

export const ShoppingListModel = mongoose.model(
  "ShoppingList",
  shoppingListSchema
);
