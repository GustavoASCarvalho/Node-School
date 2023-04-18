import { Request, Response, Router } from "express";
import UsersService from "../services/user.service";
import { authMiddleware } from "../middlewares/auth.middleware";

const router = Router();

router.post("/", async (req: Request, res: Response) => {
  try {
    await UsersService.create(req.body);
    res.status(201).send({ message: "User created successfully" });
  } catch (error: any) {
    res.status(401).send({ message: error.message });
  }
});

router.post("/authorization", async (req: Request, res: Response) => {
  try {
    const token = await UsersService.authorization(
      req.body.email,
      req.body.password
    );
    res.status(200).send({ token: token });
  } catch (error: any) {
    res.status(401).send({ message: error.message });
  }
});

router.put("/:id", authMiddleware, async (req: Request, res: Response) => {
  if (req.params.id !== res.locals.userId)
    return res.status(401).send({ message: "Não autorizado" });
  try {
    await UsersService.update(req.params.id, req.body);
    res.status(200).send({ message: "User updated successfully" });
  } catch (error: any) {
    res.status(401).send({ message: error.message });
  }
});

router.delete("/:id", authMiddleware, async (req: Request, res: Response) => {
  if (req.params.id !== res.locals.userId)
    return res.status(401).send({ message: "Não autorizado" });
  try {
    await UsersService.delete(req.params.id);
    res.status(200).send({ message: "User deleted successfully" });
  } catch (error: any) {
    res.status(401).send({ message: error.message });
  }
});

router.get("/", authMiddleware, async (req: Request, res: Response) => {
  try {
    const user = await UsersService.getById(res.locals.userId);
    res.status(200).send(user);
  } catch (error: any) {
    res.status(500).send({ message: error.message });
  }
});

export default router;
