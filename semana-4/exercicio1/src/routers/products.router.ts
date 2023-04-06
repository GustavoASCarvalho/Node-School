import { Request, Response, Router } from "express";
import ProductsService from "../services/products.service";

const router = Router();

const products = ProductsService.getAll();

router.get("/", (req: Request, res: Response) => {
  res.status(200).send(products);
});

router.get("/:id", (req: Request, res: Response) => {
  const id = Number(req.params.id);
  try {
    const product = ProductsService.getById(id);
    res.status(200).send(product);
  } catch (error) {
    res.status(404).send({ message: error });
  }
});

router.post("/", (req: Request, res: Response) => {
  const product = req.body;
  const newProduct = ProductsService.create(product);
  res.status(201).send({
    message: "Product created successfully",
    product: newProduct,
  });
});

router.delete("/:id", (req: Request, res: Response) => {
  const id = Number(req.params.id);
  try {
    const product = ProductsService.delete(id);
    res.status(200).send({
      message: "Product deleted successfully",
      product,
    });
  } catch (error) {
    res.status(404).send({ message: error });
  }
});

router.put("/:id", (req: Request, res: Response) => {
  const id = Number(req.params.id);
  try {
    const product = ProductsService.update(id, req.body);
    res.status(200).send({
      message: "Product updated successfully",
      product,
    });
  } catch (error) {
    res.status(404).send({ message: error });
  }
});

export default router;
