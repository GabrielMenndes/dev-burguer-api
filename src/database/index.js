import { Sequelize } from 'sequelize';
import product from '../app/models/product.js';
import User from '../app/models/User.js';
import databaseConfig from '../Config/database.cjs';

const models = [User, product];

class Database {
  constructor() {
    this.init();
  }
  init() {
    this.connection = new Sequelize(databaseConfig);
    models.map((model) => model.init(this.connection));
  }
}
export default new Database();
