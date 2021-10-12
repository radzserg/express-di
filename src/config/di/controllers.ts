import UsersController from "../../routes/UsersController";
import { object, use } from "rsdi";
import { UsersRepository } from "../../lib/UsersRepository";

export const controllers = {
  [UsersController.name]: object(UsersController).construct(use(UsersRepository))
}