require("dotenv").config();

require("./db");
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const { postRouter } = require("./routes/posts")
const { authRouter } = require("./routes/auth")
const postRoutes = require("./routes/posts")


const app = express();

//console.log(process.env.CONNECTION_STRING)
const port = process.env.PORT || 3001;



//middlewares
app.use(express.json());
app.use(helmet());
app.use(cors());

app.get("/", (req,res)=>{
    res.send("Testing get request")

});
app.get("/cors", (req,res)=>{
    res.set('Access-Controll-Allow-Origin', '*')
    res.send({"msg" : "This should have Cors enabled"})
});


app.use(express.json());

//routers
app.use("/posts", postRouter);
app.use("/auth", authRouter);

app.listen(port,()=>{console.log(`Server is running on http://localhost:${port}`)});


 

