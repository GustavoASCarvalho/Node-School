import { Product } from "../models/product.model";

import ProductRepository from "../repositories/product.repository";

class ProductsService {
  getAll() {
    return ProductRepository.getAll();
  }

  getById(id: number) {
    return ProductRepository.getById(id);
  }

  create(product: Product) {
    return ProductRepository.create(product);
  }

  update(id: number, product: Partial<Product>) {
    return ProductRepository.update(id, product);
  }

  async delete(id: number) {
    const product = await ProductRepository.delete(id);
    if (!product) {
      throw new Error("Product not found");
    }
    return product;
  }
}

export default new ProductsService();
