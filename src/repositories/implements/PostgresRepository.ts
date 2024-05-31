import { PrismaClient } from "@prisma/client";
import { IUserRepository } from "../IUserRepository";
import { User } from "../../entities/User";
import { v4 as uuidv4 } from "uuid";

export class PostgresRepository implements IUserRepository {
  constructor(private prisma: PrismaClient) {}

  async findByEmail(email: string): Promise<User> {
    const exist = await this.prisma.users.findFirst({
      where: {
        email,
      },
    });

    console.log(exist);

    return exist!;
  }

  async save(user: User): Promise<void> {
    var id = uuidv4();
    const u = await this.prisma.users.create({
      data: {
        id: id,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        company: user.company,
        password: user.password,
      },
    });

    console.log("Usuário criado: ", u);
  }

  async findAllUsers(): Promise<User[]> {
    const users = await this.prisma.users.findMany();
    console.log(users);
    return users;
  }
}
