const express = require("express");
// const morgan = require("morgan");

require("dotenv").config();
require("colors");

const app = express();
const { NODE_ENV, PORT } = process.env || 5000;
const port = Number(PORT);

app.get("/", (_req, res) => res.send("Hello!"));
app.listen(port, async function bootApp() {
  console.log(
    `Server started on port: ${port} and in ${NODE_ENV} mode`.yellow.bold,
  );
});
