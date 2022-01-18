const express = require("express");
const bodyParser = require("body-parser");

const productsRoutes = require("./products");

const routes = express();

routes.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
routes.use(bodyParser.json());

routes.use("/product", productsRoutes);

module.exports = routes;
