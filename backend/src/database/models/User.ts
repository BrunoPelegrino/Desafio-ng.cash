import { INTEGER, STRING, Model } from 'sequelize';
import db from '.'
import Account from './Account';

class User extends Model {
  private id!: number;
  private username!: string;
  private password!: string;
  private accountId!: number;

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
  }
},{
  sequelize: db,
  modelName: 'users',
  timestamps: false,
});

User.belongsTo(Account, {foreignKey: 'accountId', as: 'user'});

export default User