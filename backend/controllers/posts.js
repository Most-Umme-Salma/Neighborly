const { Post } = require("../models/posts");

const createPost = async (req, res, next) => {
  try {
    const {
      body: { title,
        description,
        price,
        category,
        condition,
        post_code,
        currency,
        img, },
    } = req;

    //save new post in db
    const newPost = await Post.create({
      title,
      description,
      price,
      category,
      condition,
      post_code,
      currency,
      img,
    });

    res.json(newPost);
  } catch (error) {
    res.json({ message: error.message });
  }
};

const getPost = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;
    const post = Post.findById(id);
  } catch (error) {
    res.json({ message: error.message });
  }
};

const getPosts = async (req, res, next) => {
  const pNew = req.query.new;
  const pCategory = req.query.category;
  
  try {
    // require params. check if any posts include the searched title/desc etc
   

    let posts;
    // sort posts
    if (pNew) {
      posts = await Post.find().sort({ createdAt: -1 }).limit(1);
    } else if (pCategory) {
      posts = await Post.find({
        category: {
          $in: [pCategory],
        },
      }); 
    } else {
      posts = await Post.find();
    }
    
    /*const posts = Post.find({});*/
    res.json(posts);
  } catch (error) {
    res.json({ message: error.message });
  }
};

const updatePost = async (req, res, next) => {
  const {
    params: { id },
    body,
  } = req;

  try {
    const posts = await Post.findByIdAndUpdate(id, { body });
    res.json(post);
  } catch (error) {
    res.json({ message: error.message });
  }
};

const deletePost = async (req, res, next) => {
  try {
  } catch (error) {
    res.json({ message: error.message });
  }
};
// 
const getFilteredPosts = async (req, res, next) => {
  try {
    res.send("anything")
    console.log("Filter Test successful :D")
  } catch(err) {
    res.json({message:error.message});
  }
};



module.exports = {
  createPost,
  getPost,
  getPosts,
  updatePost,
  deletePost,
  getFilteredPosts,
};
