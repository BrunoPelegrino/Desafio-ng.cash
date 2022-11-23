import { CreateUser } from './../controllers/User.controller';
import { Router } from "express";
const userRouter = Router();

const teste = new CreateUser();

userRouter.post('/login', teste.createUser)

export { userRouter }