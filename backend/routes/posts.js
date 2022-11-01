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
postRouter.route("/offers").get(getPost).put(updatePost)


// postRouter.route('/search').get(getFilteredPosts)

/*
router.get("/posts", async (req, res) => {
	try {
		const page = parseInt(req.query.page) - 1 || 0;
		const limit = parseInt(req.query.limit) || 5;
		const search = req.query.search || "";
		let sort = req.query.sort || "date";
	    let title = req.query.type || "All";

		const sortOptions = [
			"title",
            "description",
            "price",
            "post_code",
            "created_at",
		];

        sort === "All"
			? (sort = [...sortOptions])
			: (sort = req.query.sort.split(","));
		req.query.sort ? (sort = req.query.sort.split(",")) : (sort = [sort]);

		let sortBy = {};
		if (sort[1]) {
			sortBy[sort[0]] = sort[1];
		} else {
			sortBy[sort[0]] = "asc";
		}

		const posts = await posts.find({ name: { $regex: search, $options: "i" } })
			.where("title")
			.in([...title])
			.sort(sortBy)
			.skip(page * limit)
			.limit(limit);

		const total = await posts.countDocuments({
			title: { $in: [...title] },
			price: { $regex: search, $options: "i" },
		});

		const response = {
			error: false,
			total,
			page: page + 1,
			limit,
            sort: sortOptions,
			posts,
		};

		res.status(200).json(response);
	} catch (err) {
		console.log(err);
		res.status(500).json({ error: true, message: "Internal Server Error" });
	}
});


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
