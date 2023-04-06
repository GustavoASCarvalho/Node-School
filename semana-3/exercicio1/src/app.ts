import express, { Request, Response, Router } from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

const router = Router();

const port = 3000;

router.get("/", (req: Request, res: Response) => {
  const message = { message: "Hello World" };
  res.status(200).send(message);
});

app.use(router);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
