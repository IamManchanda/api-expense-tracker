const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const transactions = require("./routes/transactions");
const connectDB = require("./connect-db");

require("dotenv").config();
require("colors");

connectDB();

const app = express();
const { PORT, NODE_ENV, CORS_ORIGIN } = process.env || 5000;
const port = Number(PORT);

app.use(express.json());

app.use(
  cors({
    origin: CORS_ORIGIN,
    optionsSuccessStatus: 200,
  }),
);

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/transactions", transactions);
app.listen(port, async function bootApp() {
  console.log(
    `Server started on port: ${port} and in ${NODE_ENV} mode`.yellow.bold,
  );
});
