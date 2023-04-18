import { User, UserModel } from "../models/user.model";

class UserRepository {
  getAll(): Promise<User[]> {
    return UserModel.find();
  }
  getById(id: string): Promise<User | null> {
    return UserModel.findOne({ _id: id });
  }
  getByEmail(email: string): Promise<User | null> {
    return UserModel.findOne({ email: email });
  }
  create(user: User): Promise<User> {
    return UserModel.create(user);
  }
  update(id: string, user: Partial<User>): Promise<User | null> {
    return UserModel.findOneAndUpdate({ _id: id }, { $set: user });
  }
  delete(id: string): Promise<User | null> {
    return UserModel.findOneAndDelete({ _id: id });
  }
}

export default new UserRepository();
