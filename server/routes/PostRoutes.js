const {
  getPosts,
  AddPost,
  deletePost,
} = require("../controllers/PostController");

const routes = require("express").Router();

routes.get("/get", getPosts);
routes.post("/add", AddPost);
routes.delete("/delete", deletePost);

module.exports = routes;
