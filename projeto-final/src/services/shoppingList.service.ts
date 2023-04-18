import { ShoppingList } from "../models/shoppingList.model";

import ShoppingListRepository from "../repositories/shoppingList.repository";

class ShoppingListsService {
  getAll() {
    return ShoppingListRepository.getAll();
  }

  getAllByUserId(userId: string) {
    return ShoppingListRepository.getAllByUserId(userId);
  }

  getById(id: string) {
    return ShoppingListRepository.getById(id);
  }

  create(shoppinglist: ShoppingList) {
    return ShoppingListRepository.create(shoppinglist);
  }

  update(id: string, shoppinglist: Partial<ShoppingList>) {
    return ShoppingListRepository.update(id, shoppinglist);
  }

  async delete(id: string) {
    const shoppinglist = await ShoppingListRepository.delete(id);
    if (!shoppinglist) {
      throw new Error("ShoppingList not found");
    }
    return shoppinglist;
  }
}

export default new ShoppingListsService();
