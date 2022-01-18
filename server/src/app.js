const express = require("express");
const app = express();
const routes = require("./routes");

const db = require("./config/dbConfig");

db.authenticate()
  .then(() => {
    // db.sync({ force: true });
    // require("./models/seller");
    // require("./models/offer");
    // require('./models/productDetails')
    // require('./models/productOffers');
    console.log("sequlize worknig successfully");
  })
  .catch((err) => {
    console.log("******************************************************");
    console.log(err);
    console.log("******************************************************");
  });

app.use(routes);

module.exports = app;
