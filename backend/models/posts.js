const {Schema, model} = require("mongoose");

const postSchema = new Schema({
    title: {type: String, require: true},
    description: {type: String, required: true },
    price: {type: String},
    post_code:{type: Number},
    created_at: {type:Date},
})
const Post = model("Post", postSchema)

module.exports = {
    Post,
}