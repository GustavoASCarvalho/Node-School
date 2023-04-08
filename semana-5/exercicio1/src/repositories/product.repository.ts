import { Product, ProductModel } from "../models/product.model";
class ProductRepository {
  getAll(): Promise<Product[]> {
    return ProductModel.find();
  }
  getById(id: number): Promise<Product | null> {
    return ProductModel.findOne({ id: id });
  }
  create(product: Product): Promise<Product> {
    return ProductModel.create(product);
  }
  update(id: number, product: Partial<Product>): Promise<Product | null> {
    return ProductModel.findOneAndUpdate({ id: id }, { $set: product });
  }
  delete(id: number): Promise<Product | null> {
    return ProductModel.findOneAndDelete({ id: id });
  }
}

export default new ProductRepository();
