const {Schema, model} = require("mongoose");

const userSchema = new Schema({
    email: {type: String, unique: true, require: true},
    password: {type: String, required: true, select: false },
    name: {type: String},
    post_code:{type: Number},
    birth_date: {type:Date}

})

const User = model("User", userSchema)

module.exports = {
    User,
}