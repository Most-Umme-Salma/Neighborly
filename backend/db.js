

module.exports = () =>
  mongoose
    .connect(process.env.CONNECTION_STRING)
    .then(() => {console.log("Connected to MongoDb")
    mongoose.Promise = global.Promise;}
)
    .catch((err) => {
      console.log(err);
    });

const mongoose = require("mongoose")
mongoose.connect(process.env.CONNECTION_STRING).catch((err)=>{console.log(err)});

