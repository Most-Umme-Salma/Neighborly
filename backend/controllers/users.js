const { User } = require("../models/users")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const login = async (req, res, next) =>{ 

}

const signup = async (req, res, next) =>{
    try {
        const {
            body: {email, password, name, birth_date},
        } = req;

        //chech if user exists
        const user = await User.findOne({email})
        //if (user) throw ErrorResponse("User already exists", 420)  ---- must create error handling middleware
    
        // hash the password before it goes into the middleware
        const hash = await bcrypt.hash(password, 5)
        console.log({ hash });

        //save new user in db
        const newUser = await User.create({ email, password: hash, name, birth_date})
        // generate a nwt for user
        const payload = {email: newUser.email, name: newUser.name, id: newUser._id} 
        const token = jwt.sign(payload, process.env.JWT_SECRET,{
            expiresIn: "6000m",
        });

        res.json(newUser);
    } catch(error){
        next(error);
    }
}

module.exports = {
    login,
    signup,
}