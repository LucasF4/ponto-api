import { PrismaClient } from "@prisma/client";
import { PostgresRepository } from "../../repositories/implements/PostgresRepository";
import { CreateController } from "./CreateController";
import { CreateUserUseCase } from "./CreateUserUseCase";

export const createUserFactory = () => {
  const prisma = new PrismaClient();
  const postgresRepository = new PostgresRepository(prisma);
  const createUserUseCase = new CreateUserUseCase(postgresRepository);
  const createUserController = new CreateController(createUserUseCase);

  return createUserController;
};
