import { Request, Response } from "express-serve-static-core";

export default class UsersController {

  public async actionIndex( req: Request, res: Response) {
    res.send('List Users')
  }

  public async actionCreate( req: Request, res: Response) {
    res.send('Create Users')
  }
}