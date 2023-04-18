import { ShoppingList, ShoppingListModel } from "../models/shoppingList.model";

class ShoppingListRepository {
  getAll(): Promise<ShoppingList[]> {
    return ShoppingListModel.find();
  }
  async getById(id: string): Promise<ShoppingList | null> {
    return ShoppingListModel.findOne({ _id: id });
  }
  create(shoppinglist: ShoppingList): Promise<ShoppingList> {
    return ShoppingListModel.create(shoppinglist);
  }
  update(
    id: string,
    shoppinglist: Partial<ShoppingList>
  ): Promise<ShoppingList | null> {
    return ShoppingListModel.findOneAndUpdate(
      { _id: id },
      { $set: shoppinglist }
    );
  }
  delete(id: string): Promise<ShoppingList | null> {
    return ShoppingListModel.findOneAndDelete({ _id: id });
  }

  getAllByUserId(userId: string): Promise<ShoppingList[]> {
    return ShoppingListModel.find({ owner: userId });
  }
}

export default new ShoppingListRepository();
