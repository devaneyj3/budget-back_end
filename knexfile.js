// Update with your config settings.

module.exports = {
  development: {
    client: "postgresql",
    connection: {
      database: "budget",
      user: process.env.USERNAME,
      password: process.env.PASSWORD,
    },
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
  },
  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
