import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(request: Request, response: Response) {
    const { first_name, last_name, email, company, password } = request.body;

    try {
      const user = await this.createUserUseCase.execute({
        first_name,
        last_name,
        email,
        company,
        password,
      });

      console.log("Retorno do meu UseCase: ", user);

      return response.status(201).json(user);
    } catch (error) {
      console.log(error);
      return response.status(400).json({ msg: "Something Went Wrong!" });
    }
  }
}
