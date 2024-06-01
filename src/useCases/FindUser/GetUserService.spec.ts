import { User } from "../../entities/User";
import { DbUserRepository } from "../../repositories/implements/dbUserRepository";
import { GetUsersUseCase } from "./GetUsersUseCase";

describe("Get User", () => {
  it("Should be able to get all users", async () => {
    const dbUserRepository = new DbUserRepository();
    const getUsersUseCase = new GetUsersUseCase(dbUserRepository);

    const users = await getUsersUseCase.execute();

    expect(users).toHaveLength;
    expect(users).not.toThrow;
    expect(users).not.toBeUndefined();
  });
});
