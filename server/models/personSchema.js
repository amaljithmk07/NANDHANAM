const mongoose = require("mongoose");
const personSchema = new mongoose({
  id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  debit: {
    type: String,
    required: true
  },
  credit: {
    type: String,
    required: true
  }
});
const data = mongoose.model("Calender_DB", personSchema);
module.exports = data;
