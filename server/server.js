const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const AuthenticationRoutes = require("./routes/AuthenticationRoutes");
const PostRoutes = require("./routes/PostRoutes");
const Database = require("./config/db");

Database();
app.use(express.json());

app.use(cors());

app.use("/api/user", AuthenticationRoutes);
app.use("/api/posts", PostRoutes);

const port = process.env.PORT || 3002;

app.listen(port, () => {
  console.log("server connected on port ", port);
});
