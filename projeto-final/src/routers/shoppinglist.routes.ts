import { Request, Response, Router } from "express";
import ShoppingListService from "../services/shoppingList.service";
import { authMiddleware } from "../middlewares/auth.middleware";

const router = Router();

router.get("/", authMiddleware, async (req: Request, res: Response) => {
  try {
    const shoppinglists = await ShoppingListService.getAllByUserId(
      res.locals.userId
    );
    if (shoppinglists.length === 0)
      return res.status(404).send({ message: "ShoppingList not found" });
    res.status(200).send(shoppinglists);
  } catch (error: any) {
    res.status(500).send({ message: error.message });
  }
});

router.get("/:id", authMiddleware, async (req: Request, res: Response) => {
  try {
    const shoppinglist = await ShoppingListService.getById(req.params.id);
    if (!shoppinglist)
      return res.status(404).send({ message: "ShoppingList not found" });
    res.status(200).send(shoppinglist);
  } catch (error) {
    res.status(404).send({ message: error });
  }
});

router.put("/:id", authMiddleware, async (req: Request, res: Response) => {
  try {
    const shoppinglist = req.body;
    if (shoppinglist.owner !== res.locals.userId)
      return res.status(401).send({ message: "Não autorizado" });
    const updatedShoppingList = await ShoppingListService.update(
      req.params.id,
      shoppinglist
    );
    res.status(200).send({
      message: "ShoppingList updated successfully",
      shoppinglist: updatedShoppingList,
    });
  } catch (error: any) {
    res.status(500).send({ message: error.message });
  }
});

router.post("/", authMiddleware, async (req: Request, res: Response) => {
  try {
    const shoppinglist = req.body;
    console.log(shoppinglist.owner);
    console.log(res.locals.userId);
    if (shoppinglist.owner !== res.locals.userId)
      return res.status(401).send({ message: "Não autorizado" });
    const newShoppingList = await ShoppingListService.create(shoppinglist);
    res.status(201).send({
      message: "ShoppingList created successfully",
      shoppinglist: newShoppingList,
    });
  } catch (error: any) {
    res.status(500).send({ message: error.message });
  }
});

router.delete("/:id", authMiddleware, async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const shoppinglist = await ShoppingListService.delete(id);
    res.status(200).send({
      message: "ShoppingList deleted successfully",
      shoppinglist,
    });
  } catch (error: any) {
    res.status(404).send({ message: error.message });
  }
});
export default router;
