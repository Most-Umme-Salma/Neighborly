const express = require("express");
const {
  createPost,
  getPost,
  getPosts,
  updatePost,
  deletePost,
} = require("../controllers/posts");

const postRouter = express.Router();

postRouter.route("/").get(getPosts).post(createPost);
postRouter.route("/:id").get(getPost).put(updatePost).delete(deletePost);

// postRouter.route('/search').get(getFilteredPosts)

/*

getFilteredPosts = async () => {
    try {

    } catch(err) {

    }
}

1. When you click on a filter button (on front end) you can send another axios/fetch request and get only
the posts with the category selected
OR
2. You can get all posts, store them in state, and filter on the front end

myPostsState.filter(post => post.category.mainCategory === "Electronics")


*/

module.exports = {
  postRouter,
};
