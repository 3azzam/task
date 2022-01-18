const port = process.env.APP_PORT || 3000;
const externalProductUri = process.env.EXTERNAL_PRODCUT_URI;

// DB CONFIGURATION
const db_port = process.env.DB_PORT;
const db_host = process.env.DB_HOST;
const db_name = process.env.DB_NAME;
const db_user = process.env.DB_USER;
const db_password = process.env.DB_PASSWORD;
const db_dialect = process.env.DB_DILECT;

module.exports = {
  port,
  externalProductUri,
  db_port,
  db_host,
  db_name,
  db_user,
  db_password,
  db_dialect,
};
