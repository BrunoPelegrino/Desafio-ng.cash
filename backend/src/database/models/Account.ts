import { INTEGER, STRING, Model } from 'sequelize';
import db from '.'

class Account extends Model {
  private id!: number;
  private ballance!: string;
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
  modelName: 'accounts',
  timestamps: false,
});

export default Account