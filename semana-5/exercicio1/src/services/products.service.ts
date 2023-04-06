import { Product } from "../models/product.model";

import { ProductRepository } from "../repositories/product.repository";

class ProductsService {
  getAll() {
    return ProductRepository.getAll();
  }

  getById(id: number) {
    id = Number(id);
    return ProductRepository.getById(id);
  }

  create(product: typeof Product) {
    return ProductRepository.create(product);
  }

  update(id: number, product: Partial<typeof Product>) {
    id = Number(id);
    return ProductRepository.update(id, product);
  }

  delete(id: number) {
    id = Number(id);
    return ProductRepository.delete(id);
  }
}

export default new ProductsService();
