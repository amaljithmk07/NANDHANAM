const express = require("express");
const server = express();
const cors = require("cors");
const mongoose = require("mongoose");
const personroutes = require("./router/personroutes");

mongoose
  .connect(
    `mongodb+srv://amaljithmk123:8086171296@cluster0.57cex.mongodb.net/nandhanam`
  )
  .then(() => {
    console.log("Database  Connected Successfully");
  })
  .catch((err) => {
    console.log(err);
  });

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use("/api/person", personroutes);

const port = 2222;
server.listen(port, () => {
  console.log(`server started on port ${port}`);
});
