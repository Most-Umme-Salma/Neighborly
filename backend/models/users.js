const {Schema, model} = require("mongoose");

const userSchema = new Schema({
    email: {type: String, unique: true, require: true},
    password: {type: String, required: true, select: false },
    name: {type: String},
    description: { type: String, required: true },
    short_description: { type: String, required: true },
    post_code:{type: Number},
    birth_date: {type:Date},
    img: { type: String },
    },
    { timestamps: true }
)

const User = model("User", userSchema)

module.exports = {
    User,
}