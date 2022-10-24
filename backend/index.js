require("dotenv").config();
require("./db");
const express= require("express");
const { postRouter } = require("./routes/posts")
const { authRouter } = require("./routes/auth")
const postRoutes = require("./routes/posts")

const app = express();

require("./controllers/posts")
//console.log(process.env.CONNECTION_STRING)
const port = process.env.PORT || 3001;
app.get("/", (req,res)=>{
    res.send("Testing get request")
});

app.use(express.json())
app.listen(port,()=>{console.log(`Server is running on http://localhost:${port}`)});

app.use("/posts", postRouter);
app.use("/auth", authRouter);
 