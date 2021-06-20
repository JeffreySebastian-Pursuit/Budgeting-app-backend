const transactions = require("express").Router();
const dataArr = require("../models/data");

// get all data or Index
transactions.get("/", (req, res) => {
  res.json(dataArr);
});

// Show: get an specific id or entry
transactions.get("/:id", (req, res) => {
  const data = dataArr[req.params.id];
  if (data) {
    res.json(data);
  } else {
    res.redirect("/404");
  }
});

// POST
transactions.post("/", (req, res) => {
  const { body } = req;
  dataArr.push(body);
  const newData = dataArr.length - 1;
  res.json(dataArr[newData]);
});

// PUT
transactions.put("/:id", (req, res) => {
  const { id } = req.params;
  const { body } = req;
  dataArr[id] = body;
  res.json(dataArr[id]);
});

//  Delete
transactions.delete("/:id", (req, res) => {
  const deletedData = dataArr.splice(req.params.id, 1);
  res.json(deletedData[0]);
});

module.exports = transactions;
