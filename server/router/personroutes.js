const express = require("express");
const personroutes = express.Router();
const personDB = require('../models/personSchema')
personroutes.post("/add", async(req, res) => {
  console.log(req.body);
  const oldData = await personDB.findOne({
  });
  if (oldData) {
    return res.status(400).json({
      success: false,
      error: true,
      errorMessage: "You are already booked ",
    });
  }
  const Data = new BookingDB({
    login_id: req.userData.userId,
    photographers_id: req.params.id,
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    address: req.body.address,
    city: req.body.city,
    state: req.body.state,
    date: req.body.date,
    status: "pending",
  });
  Data.save()
    .then((data) => {
      res.status(200).json({
        success: true,
        error: false,
        message: "success",
        data: data,
      });
    })
    .catch((err) => {
      res.status(400).json({
        success: false,
        error: true,
        message: "failed",
        errorMessage: err.message,
      });
    });
});

module.exports = personroutes;
