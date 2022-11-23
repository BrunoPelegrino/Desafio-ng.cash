import { Request, Response } from "express";
import AccountService from "../services/Account.service";
import UserService from "../services/User.service";

const jwt = require('jsonwebtoken');
// const userService = require('../services/userService');
const account = new AccountService();

const secret = process.env.JWT_SECRET;

export class CreateUser {
    public createUser = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const { _id } = await account.createAccount();

  const user = new UserService();
  const newUser = await user.createUser({ username, password, accountId: _id });
  
  res.status(201).json(newUser);
};}