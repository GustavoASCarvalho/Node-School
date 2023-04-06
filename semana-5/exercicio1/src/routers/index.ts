import { Router } from "express";
import studentsRouter from "./products.router";

const router = Router();

router.use("/products", studentsRouter);

export default router;
