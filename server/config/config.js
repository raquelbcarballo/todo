const config = {
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || '1234',
  database: process.env.DB_NAME || 'todo',
  host: process.env.DB_HOST || 'localhost',
  dialect: 'postgres'
};

module.exports = {
  development: config,
  test: config,
  production: config,
  config
};