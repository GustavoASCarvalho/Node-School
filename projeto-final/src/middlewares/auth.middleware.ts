import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import userService from "../services/user.service";

dotenv.config();

const secretJWT = process.env.JWT_SCRET_KEY || "";

export type JwtPayload = {
  id: string;
  exp: number;
};

export async function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).send({ message: "Não autorizado" });
  }

  const token = authorization.split(" ")[1];

  try {
    const { id } = jwt.verify(token, secretJWT) as JwtPayload;
    const user = await userService.getById(id);

    if (!id || !user) {
      return res.status(401).send({ message: "Não autorizado" });
    }

    console.log("USERID--> " + res.locals.userId);
    res.locals.userId = id;
  } catch (error) {
    return res.status(401).send({ message: "Não autorizado" });
  }
  next();
}
