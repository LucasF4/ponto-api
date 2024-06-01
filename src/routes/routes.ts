import Router from "express";
import { createUserFactory } from "../useCases/CreateUser/createUserFactory";
import { getUsersFactory } from "../useCases/FindUser/GetUsersFactory";

const router = Router();

router.post("/create", (req, res) => {
  return createUserFactory().handle(req, res);
});

router.get("/users", (req, res) => {
  return getUsersFactory().handle(req, res);
});

export { router };
