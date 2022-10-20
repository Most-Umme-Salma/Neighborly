const express = require("express");
const { login, signup } = require("../controllers/users");

const authRouter = express.Router();

//login
authRouter.post("/login", login);

authRouter.post("/signup", signup);

module.exports = {
  authRouter,
};
