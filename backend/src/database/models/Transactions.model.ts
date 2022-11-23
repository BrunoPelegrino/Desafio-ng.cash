import { INTEGER, STRING, Model } from 'sequelize';
import db from '.'
import Account from './Account.model';

class Transacation extends Model {
  private id!: number;
  private _value!: string;
  private _createdAt!: Date;
  private _debitedAccountId!: number;
  private _creditedAccountId!: number;
}

Transacation.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  Transacationname: {
    type: STRING,
    allowNull: false,
    unique: true,
  },
  password: { 
    type: STRING,
    allowNull: false,
  },
  accountId : { 
    type: INTEGER,
    allowNull: false,
  }
},{
  sequelize: db,
  modelName: 'Transacation',
  timestamps: false,
});

// Transacation.hasManny(Account, {foreignKey: 'accountId', as: 'transacation'});

export default Transacation