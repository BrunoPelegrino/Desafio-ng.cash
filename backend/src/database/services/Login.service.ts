import User from '../models/User.model'

interface IRequest {
  username: string;
  password: string;
}

export default class LoginService  {

  public makeLogin = async ({ username, password }: IRequest)=> {
 
  }
}