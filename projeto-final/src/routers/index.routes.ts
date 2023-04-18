import { Router } from "express";
import userRoutes from "./user.routes";
import shoppinglist from "./shoppinglist.routes";

const router = Router();

router.use("/user", userRoutes);
router.use("/shoppinglist", shoppinglist);

export default router;
