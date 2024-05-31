import { User } from "../../entities/User";
import { IUserRepository } from "../IUserRepository";

export class DbUserRepository implements IUserRepository {
  private users: User[] = [];

  async findByEmail(email: string): Promise<User> {
    const exist = this.users.find((u) => u.email == email);

    console.log(exist);

    return exist!;
  }

  async save(user: User): Promise<void> {
    const u = this.users.push(user);
    console.log(u);
  }

  async findAllUsers(): Promise<User[]> {
    const users = this.users;
    console.log(users);
    return users;
  }
}
