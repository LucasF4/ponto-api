import { PrismaClient } from "@prisma/client";
import { PostgresRepository } from "../../repositories/implements/PostgresRepository";
import { GetUsersController } from "./GetUsersController";
import { GetUsersUseCase } from "./GetUsersUseCase";

export const getUsersFactory = () => {
  const prisma = new PrismaClient();
  const postgresRepository = new PostgresRepository(prisma);
  const getUsersUseCase = new GetUsersUseCase(postgresRepository);
  const getUsersController = new GetUsersController(getUsersUseCase);

  return getUsersController;
};
