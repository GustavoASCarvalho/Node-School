import { Request, Response, Router } from "express";
import ProductsService from "../services/products.service";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  const products = await ProductsService.getAll();
  res.status(200).send(products);
});

router.get("/:id", async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  try {
    const product = await ProductsService.getById(id);
    res.status(200).send(product);
  } catch (error) {
    res.status(404).send({ message: error });
  }
});

router.post("/", async (req: Request, res: Response) => {
  const product = req.body;
  const newProduct = await ProductsService.create(product);
  res.status(201).send({
    message: "Product created successfully",
    product: newProduct,
  });
});

router.delete("/:id", async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  try {
    const product = await ProductsService.delete(id);
    res.status(200).send({
      message: "Product deleted successfully",
      product,
    });
  } catch (error) {
    res.status(404).send({ message: error });
  }
});

router.put("/:id", async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  try {
    const product = await ProductsService.update(id, req.body);
    res.status(200).send({
      message: "Product updated successfully",
      product,
    });
  } catch (error) {
    res.status(404).send({ message: error });
  }
});

export default router;
