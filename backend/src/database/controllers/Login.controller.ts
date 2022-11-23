/* import { Request, Response } from "express";
import UserService from "../services/Login.service";

export class UserController {
  private login = new UserService

  public makeLogin= async (req: Request, res: Response) => {
    const { username, password } = req.body;
    // if (username.length < 3 || password.validatePassword)throw new Error
    const token = await this.login.makeLogin({username, password});
    return res.status(200).json({ token })
  }
}; */