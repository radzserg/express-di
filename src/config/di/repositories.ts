import { UsersRepository } from "../../lib/UsersRepository";
import { object } from "rsdi";

export const repositories = {
  [UsersRepository.name]: object(UsersRepository)
};