const express = require("express");
const {createPost, getPost, getPosts, updatePost, deletePost,} = require("../controllers/posts")

const postRouter = express.Router();

postRouter.route("/").get(getPosts).post(createPost)
postRouter.route("/:id").get(getPost).put(updatePost).delete(deletePost);




module.exports = {
    postRouter,
};