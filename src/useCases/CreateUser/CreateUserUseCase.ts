import { User } from "../../entities/User";
import { PostgresRepository } from "../../repositories/implements/PostgresRepository";
import { DbUserRepository } from "../../repositories/implements/dbUserRepository";
import { ICreateUserDTO } from "./CreateUserDTO";

export class CreateUserUseCase {
  constructor(
    private postgresRepository: PostgresRepository | DbUserRepository
  ) {}

  async execute(data: ICreateUserDTO) {
    const exist = await this.postgresRepository.findByEmail(data.email);

    if (exist) {
      throw new Error("User already exist.");
    }

    const user = new User(data);

    await this.postgresRepository.save(user);

    return user;
  }
}
