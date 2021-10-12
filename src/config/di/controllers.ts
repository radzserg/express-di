import UsersController from "../../routes/UsersController";
import { object, use } from "rsdi";
import { UsersRepository } from "../../lib/UsersRepository";
import { AppLogger } from "../../lib/Logger";

export const controllers = {
  [UsersController.name]: object(UsersController).construct(
    use(UsersRepository),
    use(AppLogger)
  ),
};
