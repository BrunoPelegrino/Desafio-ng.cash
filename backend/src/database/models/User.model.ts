import { INTEGER, STRING, Model } from 'sequelize';
import db from '.'
import Account from './Account.model';

class User extends Model {
  private _id!: number;
  private _username!: string;
  private _password!: string;
  private _accountId!: number;

}

User.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
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
    references: {
      model: 'Accounts',
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
},{
  sequelize: db,
  modelName: 'User',
  timestamps: false,
});

// User.belongsTo(Account, {foreignKey: 'accountId', as: 'user'});

export default User