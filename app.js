const express = require("express");
const cors = require('cors');
const transactionController = require("./Budgets/controllers/transactions")

const app = express();
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  next();
});

app.use("/transactions", transactionController)

// ROOT
app.get("/", (req, res) => {
  res.send("Budgeting App");
});

// Error message
app.get("*", (req, res) => {
  res.status(404).send("Page Not Found!");
});
module.exports = app;
