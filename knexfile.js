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
    debug: true,
    client: "pg",
    connection: {
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false },
    },
    migrations: {
      directory: "./data/migrations",
    },
  },
};
