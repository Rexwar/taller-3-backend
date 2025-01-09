/**
 * Este archivo se encarga de configurar la conexión a la base de datos.
 */

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 5432, // Puerto predeterminado de PostgreSQL
    dialect: "postgres", // Cambiado de "mysql" a "postgres"
  },
  test: {
    username: "root",
    password: null,
    database: "parkingdb",
    host: "127.0.0.1",
    port: 5432,
    dialect: "postgres", // Cambiado de "mysql" a "postgres"
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 5432,
    dialect: "postgres", // Cambiado de "mysql" a "postgres"
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false, // Si usas un proveedor que requiere SSL, como Heroku
      },
    },
  },
};
