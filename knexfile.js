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
    connection: `${process.env.DATABASE_URL} &ssl=no-verify`,
    migrations: {
      directory: "./data/migrations",
    },
    ssl: { rejectUnauthorized: false },
  },
};
