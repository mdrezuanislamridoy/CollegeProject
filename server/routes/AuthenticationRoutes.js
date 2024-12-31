const {
  AddUser,
  Login,
  getUsers,
} = require("../controllers/AuthenticationController");

const routes = require("express").Router();

routes.get("/getUser", getUsers);
routes.post("/signup", AddUser);
routes.post("/login", Login);

module.exports = routes;
