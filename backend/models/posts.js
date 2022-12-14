const { Schema, model } = require("mongoose");

const postSchema = new Schema(
  {
    title: { type: String, require: true, uniquie: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: Array },
    condition: {type: Array},
    post_code: { type: Number },
    currency: {type: String},
    img: { type: Object },
    created_at: { type: Date },
    user_id: {type: String}
   
    
    //add  user id. You want to prevent having the same user, making the same offer twice (to avoid redundant data in db) so you want to make a conditional statement if user and title already exist, throw error to the client. maybe even redirect them to the offer or homepage
    // CHANGE ALL NAMES TO OFFERS. 'POST' CAN BE CONFUSING
  },
  { timestamps: true }
);
const Post = model("Post", postSchema);

module.exports = {
  Post,
};

/*
category : {
    mainCategory: "Electronics",
    subCategories: ["Mobile", "Internet", "Small"]
  }
condition: {type: boolean? }  used/new

*/
