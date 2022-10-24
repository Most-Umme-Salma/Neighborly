const mongoose = require("mongoose");

module.exports = () =>
  mongoose
    .connect(process.env.CONNECTION_STRING)
    .then(() => console.log("Connected to MongoDb"))
    .catch((err) => {
      console.log(err);
    });
