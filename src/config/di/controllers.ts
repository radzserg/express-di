import UsersController from "../../routes/UsersController";
import { object } from "rsdi";

export const controllers = {
  [UsersController.name]: object(UsersController)
}