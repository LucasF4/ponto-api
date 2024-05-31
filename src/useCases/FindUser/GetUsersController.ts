import { Request, Response } from "express";
import { GetUsersUseCase } from "./GetUsersUseCase";

export class GetUsersController {
  constructor(private getUsersUseCase: GetUsersUseCase) {}
  async handle(request: Request, response: Response) {
    const users = this.getUsersUseCase.execute();

    return response.status(200).json(users);
  }
}
