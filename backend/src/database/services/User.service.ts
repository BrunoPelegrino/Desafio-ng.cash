import Account from "../models/Account.model";
import User from "../models/User.model";

interface IRequest {
    username: string;
    password: string;
    accountId: number
  }

export default class UserService  {

  public createUser = async ({ username, password, accountId }: IRequest)=> {
   const newUser = await User.create({username, password, accountId});
   return newUser
  };

  getUsers = async () => await User.findAll({
    include: [
      {
        model: Account,
        as: 'account',
      },
    ],
  });
}