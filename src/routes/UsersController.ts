import { Request, Response } from "express-serve-static-core";
import { UsersRepository } from "../lib/UsersRepository";
import { AppLogger } from "../lib/Logger";
import { InternalServerError } from "../lib/errors";

export default class UsersController {
  public constructor(
    private readonly usersRepository: UsersRepository,
    private readonly logger: AppLogger
  ) {}

  public async actionIndex(req: Request, res: Response) {
    try {
      const users = await this.usersRepository.findAll();
      res.send(users);
    } catch (e) {
      this.logger.error(e as Error);
      throw new InternalServerError("Cannot get users");
    }
  }

  public async actionCreate(req: Request, res: Response) {
    const user = await this.usersRepository.add({ id: 3, name: "Kate Lee" });
    res.send(user);
  }
}
