require("dotenv").config();
const http = require("http");
const app = require("./src/app.js");
const { port } = require("./src/config/appConfig");

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`server working on ${port}`);
});
