const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: "postgres",
  logging: false
});

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Conexión exitosa a PostgreSQL");
  } catch (error) {
    console.error("❌ Error al conectar con PostgreSQL:", error);
    process.exit(1);
  }
};

module.exports = { sequelize, connectDB };
