const express = require("express");
const personroutes = express.Router();

personroutes.post("/adding-person", (req, res) => {
  console.log(req);
});

module.exports = personroutes;
