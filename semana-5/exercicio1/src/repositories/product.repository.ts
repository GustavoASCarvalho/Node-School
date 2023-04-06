import { Product } from "../models/product.model";

export class ProductRepository {
  static getAll() {
    return Product.find();
  }
  static getById(id: number) {
    return Product.findOne({ id: id });
  }
  static create(product: typeof Product) {
    return Product.create(product);
  }
  static update(id: number, product: Partial<typeof Product>) {
    return Product.findOneAndUpdate({ id: id }, { $set: product });
  }
  static delete(id: number) {
    return Product.findOneAndDelete({ id: id });
  }
}
