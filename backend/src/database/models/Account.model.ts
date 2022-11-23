import { INTEGER, Model } from 'sequelize';
import db from '.'
import Transaction from './Transactions.model';
import User from './User.model';

class Account extends Model {
   _id!: number;
   _ballance!: string;
}

Account.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  balance : { 
    type: INTEGER,
    allowNull: false,
  }
},{
  sequelize: db,
  modelName: 'Account',
  timestamps: false,
});

Account.hasOne(User, { foreignKey: 'accountId', as: 'user' });
User.belongsTo(Account, { foreignKey: 'accountId', as: 'account' });



export default Account