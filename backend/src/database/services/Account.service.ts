import Account from "../models/Account.model";


export default class newAccount {
  createAccount = async () => await Account.create({ balance: 100 });

}
