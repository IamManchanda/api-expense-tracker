const express = require("express");
// const morgan = require("morgan");

const transactions = require("./routes/transactions");
const connectDB = require("./connect-db");

require("dotenv").config();
require("colors");

connectDB();

const app = express();
const { NODE_ENV, PORT } = process.env || 5000;
const port = Number(PORT);

app.use("/v1/transactions", transactions);
app.listen(port, async function bootApp() {
  console.log(
    `Server started on port: ${port} and in ${NODE_ENV} mode`.yellow.bold,
  );
});
