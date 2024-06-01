import { IUserRepository } from "../../repositories/IUserRepository";
import { PostgresRepository } from "../../repositories/implements/PostgresRepository";
import { DbUserRepository } from "../../repositories/implements/dbUserRepository";

export class GetUsersUseCase {
  constructor(
    private postgresRepository: PostgresRepository | DbUserRepository
  ) {}

  async execute() {
    const users = await this.postgresRepository.findAllUsers();
    console.log("My users: ", users);
    return users;
  }
}
