// Centralized Sequelize instance for models
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.MYSQL_DB || 'provision_db',
  process.env.MYSQL_USER || 'root',
  process.env.MYSQL_PASSWORD || '',
  {
    host: process.env.MYSQL_HOST || 'localhost',
    dialect: 'mysql',
    logging: false,
  }
);

module.exports = sequelize;
