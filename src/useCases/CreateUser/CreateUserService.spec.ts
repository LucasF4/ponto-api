import { User } from "../../entities/User";
import { DbUserRepository } from "../../repositories/implements/dbUserRepository";
import { CreateUserUseCase } from "./CreateUserUseCase";

describe("Create User", () => {
  it("Should be able to create a new user", async () => {
    const userRepository = new DbUserRepository();
    const createUserService = new CreateUserUseCase(userRepository);

    const userData: User = {
      first_name: "John",
      last_name: "Doe",
      email: "JohnDoe@test.com",
      company: 25,
      password: "teste",
    };

    const user = await createUserService.execute(userData);

    expect(user.first_name).toBe("John");
    expect(user).toBeInstanceOf(User);
    expect(user).toHaveProperty("id");
    expect(user.id).not.toBeUndefined();
  });
});
