const { User } = require("../models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { request } = require("express");

const login = async (req, res, next) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    
    const useremail = await User.findOne({ email: email });
    console.log(useremail, password);
    
    if (useremail.password === password) {
      res.status(201).json(useremail);
    } else {
      res.send("password are not matching");
    }
  } catch (error) {
    res.status(400).send("invalid Email");
  }
};

const signup = async (req, res, next) => {
  try {
    const {
      body: { email, password, name, birth_date },
    } = req;

    //chech if user exists
    const user = await User.findOne({ email });
    //if (user) throw ErrorResponse("User already exists", 420)  ---- must create error handling middleware

    // hash the password before it goes into the middleware
    const hash = await bcrypt.hash(password, 5);
    console.log({ hash });

    //save new user in db
    const newUser = await User.create({
      email,
      password: hash,
      name,
      birth_date,
    });
    // generate a nwt for user
    const payload = {
      email: newUser.email,
      name: newUser.name,
      id: newUser._id,
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "6000m",
    });

    res.json(newUser);
  } catch (error) {
    next(error);
  }
};

const getUsers = async(req, res, next) => {
  try {
    const users = await User.find({})
    res.json(users)
  } catch (error) {
    next(error)
  }
}

const getUser = async(req, res, next) => {
  try {
    const id = req.params.id
    const user = await User.findOne({_id:id})
    res.json(user)
  } catch (error) {
    next(error)
  }
}

module.exports = {
  login,
  signup,
  getUsers,
  getUser,
};
