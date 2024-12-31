const Post = require("../models/PostModel");

const AddPost = async (req, res) => {
  const { title, description, date } = req.body;

  if (!title || !description) {
    return res.json({ message: "Something is missing" });
  }

  const newPost = await new Post({
    title,
    description,
    date,
  });

  newPost.save();
  res.json({ message: "Post added Successfully" });
};

const getPosts = async (req, res) => {
  const posts = await Post.find();

  if (!posts) {
    return res.json({ message: "Nothing to show" });
  }
  res.json({ posts });
};

const deletePost = async (req, res) => {
  const { id } = req.body;

  const deletedPost = await Post.deleteOne({ _id: id });

  if (deletePost) {
    return res.json({ message: "Post Deleted Successful" });
  }
  res.json({ message: "failed to delete" });
};

module.exports = { AddPost, getPosts, deletePost };
