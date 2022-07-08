const Sequelize = require('sequelize');

const NODE_ENV = process.env.NODE_ENV || "development";
const DB_NAME = process.env.DB_NAME || "todo";
const DB_USERNAME = process.env.DB_USERNAME || "postgres";
const DB_PASSWORD = process.env.DB_PASSWORD || "1234";
const DB_HOST =  process.env.DB_HOST || "localhost";
const logs = NODE_ENV === "development" ? console.log : false;

const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
    host: DB_HOST,
    dialect: 'postgres',
    logging: logs
  });

const Task = require('./task')(sequelize, Sequelize.DataTypes);

module.exports = sequelize;