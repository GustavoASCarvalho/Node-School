import { Product } from "../models/product.model";

class ProductsService {
  products: Product[] = [
    {
      id: 1,
      description: "Notebook S51",
      img: "https://images.samsung.com/is/image/samsung/br-notebook-style-s51-np730xbe-kp1br-np730xbe-kp1br-fronttitanumsilver-185313138?$720_576_PNG$",
      price: 5000,
      quantity: 5,
    },
    {
      id: 2,
      description:
        "Notebook Samsung Book E30 Intel Core i3 4GB 1TB - 15,6” Full HD Windows 10",
      img: "https://a-static.mlcdn.com.br/1500x1500/notebook-samsung-book-e30-intel-core-i3-4gb-1tb-156-full-hd-windows-10/magazineluiza/135258300/44bf629ad1472f3a86f5ae8b55ed0672.jpg",
      price: 3500,
      quantity: 3,
    },
    {
      id: 3,
      description:
        "Notebook Acer Aspire 5 A514-53-59QJ Intel Core I5 8GB 256GB SSD 14 Windows 10",
      img: "https://acerstore.vteximg.com.br/arquivos/ids/157506-760-760/A514-53-54_SSD_01.jpg?v=637396805695270000",
      price: 4000,
      quantity: 2,
    },
    {
      id: 4,
      description:
        'Notebook Samsung Book E30 15.6" Intel® Core™ i3-10110U 4GB/1TB Windows 10 Home',
      img: "https://d3bkgvrq5dqryp.cloudfront.net/Custom/Content/Products/34/17/3417_product-00079815_m39_637400210574011388",
      price: 3000,
      quantity: 0,
    },
  ];

  getAll(): Product[] {
    return this.products;
  }

  getById(id: number): Product {
    const product = this.products.find((product) => product.id === id);
    if (!product) {
      throw new Error("Product not found");
    }
    return product;
  }

  create(product: Product): Product {
    this.products.push(product);
    return product;
  }

  update(id: number, product: Partial<Product>): Product {
    const productIndex = this.products.findIndex(
      (product) => product.id === id
    );
    if (productIndex === -1) {
      throw new Error("Product not found");
    }
    this.products[productIndex] = {
      ...this.products[productIndex],
      ...product,
    };
    return this.products[productIndex];
  }

  delete(id: number): Product {
    const productIndex = this.products.findIndex(
      (product) => product.id === id
    );
    if (productIndex === -1) {
      throw new Error("Product not found");
    }
    const product = this.products[productIndex];
    this.products.splice(productIndex, 1);
    return product;
  }
}

export default new ProductsService();
