const { Schema, model } = require("mongoose");

const postSchema = new Schema({
  title: { type: String, require: true },
  description: { type: String, required: true },
  price: { type: String },
  post_code: { type: Number },
  created_at: { type: Date },
  category: {
    mainCategory: String,
    subCategory: [String],
  },
});
const Post = model("Post", postSchema);

module.exports = {
  Post,
};

/*
category : {
    mainCategory: "Electronics",
    subCategories: ["Mobile", "Internet", "Small"]
  }
const findProductByCategory = await Post.find({category: {mainCategory: req.query.mainCategory, subCategory: {$in : req.query.subCategory}}})

*/
