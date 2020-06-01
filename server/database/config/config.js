require("dotenv").config();


module.exports = {
  "development": {
    "username": process.env.configUsername,
    "password": process.env.configPassword,
    "database": process.env.configDatabase,
    "host": process.env.configHost,
    "dialect": "postgres",
  },
  "test": {
    "username": process.env.configUsername,
    "password": process.env.configPassword,
    "database": process.env.configDatabase,
    "host": process.env.configHost,
    "dialect": "postgres",
  },
  "production": {
    "username": process.env.configUsername,
    "password": process.env.configPassword,
    "database": process.env.configDatabase,
    "host": process.env.configHost,
    "dialect": "postgres",
  }
}
