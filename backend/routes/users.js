//imports
const express = require("express");
const userRouter = express.Router();
const{getUser, getUsers, createUser, updateUser, deleteUser,} =require("../controllers/users");

//routing

userRouter.get("/", getUsers)
userRouter.get("/:id", getUser)


module.exports = {userRouter}