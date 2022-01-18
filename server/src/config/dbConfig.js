const {
  db_port,
  db_host,
  db_name,
  db_user,
  db_password,
  db_dialect,
} = require("./appConfig");

const Sequelize = require("sequelize");

const sequelize = new Sequelize(db_name, db_user, db_password, {
  host: db_host,
  dialect: db_dialect,
  port: db_port,
});

module.exports = sequelize;
