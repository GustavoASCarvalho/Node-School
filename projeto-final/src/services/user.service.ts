import { User } from "../models/user.model";
import bcrypt from "bcrypt";
import UserRepository from "../repositories/user.repository";
import JWT from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const secretJWT = process.env.JWT_SCRET_KEY || "";

class UsersService {
  getAll() {
    return UserRepository.getAll();
  }

  getById(id: string) {
    return UserRepository.getById(id);
  }

  getByEmail(email: string) {
    return UserRepository.getByEmail(email);
  }

  async create(user: User) {
    if (user.password) {
      user.password = await bcrypt.hash(user.password, 10);
    }
    return UserRepository.create(user);
  }

  async authorization(email: string, password: string) {
    const user = await UserRepository.getByEmail(email);

    if (!user) throw new Error("User not found");

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) throw new Error("Invalid password");

    console.log("USER_ID: ", user._id);

    const jwt = JWT.sign({ id: user._id }, secretJWT, {
      expiresIn: "1h",
    });

    return jwt;
  }

  update(id: string, user: Partial<User>) {
    return UserRepository.update(id, user);
  }

  async delete(id: string) {
    const user = await UserRepository.delete(id);
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  }
}

export default new UsersService();
