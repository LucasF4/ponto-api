import { IUserRepository } from "../../repositories/IUserRepository";

export class GetUsersUseCase {
  constructor(private iUserRepository: IUserRepository) {}

  async execute() {
    const users = this.iUserRepository.findAllUsers();

    return users;
  }
}
