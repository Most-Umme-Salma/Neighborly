const { Post } = require("../models/posts");

const createPost = async (req, res, next) =>{
    try {
        const post = Post.create(body);
        res.json(post);
    } catch(error) {
        res.json({message: error.message});
    }
}

const getPost = async (req, res, next) =>{
    try {
        const {
            params: { id },
        } = req;
        const post = Post.findById(id); 
    } catch(error){
        res.json({message: error.message});
    }
}
const getPosts = async (req, res, next) =>{
    try {
        const posts = Post.find({});
        res.json(post);
    } catch(error){
        res.json({message: error.message});
    }
    
}

const updatePost = async (req, res, next) =>{
    const {
        params: {id},
        body, 
    } = req;
    
    try {
        const posts = await Post.findByIdAndUpdate(id, {body});
        res.json(post);
    } catch(error){
        res.json({message: error.message});
    }

}

const deletePost = async (req, res, next) =>{
    try{

    } catch(error){
        res.json({message: error.message});
    }
}

module.exports = {
    createPost,
    getPost,
    getPosts,
    updatePost,
    deletePost,
};