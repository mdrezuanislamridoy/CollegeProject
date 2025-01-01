const mongoose = require("mongoose");
require("dotenv").config();

const Database = () => {
  mongoose
    .connect(
      process.env.DB_URL ||
        "mongodb+srv://mdrezuanislamridoy:RRRidoy781@rrcluster.dzwno.mongodb.net/"
    )
    .then(() => {
      console.log("db connected");
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports = Database;
