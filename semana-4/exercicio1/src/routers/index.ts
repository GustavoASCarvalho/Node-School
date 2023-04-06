import { Router } from "express";
import studentsRouter from "./products.router";

const router = Router();

router.use("/students", studentsRouter);

export default router;
