import { DbUserRepository } from "../../repositories/implements/dbUserRepository";
import { GetUsersController } from "./GetUsersController";
import { GetUsersUseCase } from "./GetUsersUseCase";

export const createUserFactory = () => {
  const dbUserRepository = new DbUserRepository();
  const getUsersUseCase = new GetUsersUseCase(dbUserRepository);
  const getUsersController = new GetUsersController(getUsersUseCase);

  return getUsersController;
};
