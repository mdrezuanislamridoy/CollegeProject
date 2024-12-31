const User = require("../models/UserModel");
const bcrypt = require("bcrypt");

const AddUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  const hashedPass = await bcrypt.hash(password, 10);

  const addNew = await new User({
    email,
    password: hashedPass,
  });

  await addNew.save();

  res.json({ user: addNew, message: "Login Successfull" });
};

const Login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.json("Something went wrong");
  }

  const findUser = await User.findOne({ email });

  const isPasswordValid = await bcrypt.compare(password, findUser.password);

  if (!findUser) {
    return res.status(404).json({ error: "User not found" });
  }

  if (!isPasswordValid) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  res.json({ user: findUser, message: "Login Successfull" });
};

const getUsers = async (req, res) => {
  const userss = await User.find();

  if (!userss) {
    return res.json({ message: "Users not availabale" });
  }

  res.json({ userss });
};

module.exports = { Login, AddUser, getUsers };
