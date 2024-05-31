import { User } from "../entities/User";

interface IUserRepository {
  findByEmail(email: string): Promise<User>;
  save(user: User): Promise<void>;
  findAllUsers(): Promise<User[]>;
}

export { IUserRepository };
