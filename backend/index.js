require("dotenv").config();

require("./db");
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const { postRouter } = require("./routes/posts");
const { authRouter } = require("./routes/auth");
const postRoutes = require("./routes/posts");
const { userRouter } = require("./routes/users");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");

const app = express();

//console.log(process.env.CONNECTION_STRING)
const port = process.env.PORT || 3001;

//middlewares
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {});

app.get("/cors", (req, res) => {
  res.set("Access-Controll-Allow-Origin", "*");
  res.send({ msg: "This should have Cors enabled" });
});

// upload picture
app.use(fileUpload());
//upload end points
app.post("/upload", (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: "No file uploaded" });
  }

  const file = req.files.file;
  console.log(file);

  file.mv(`../fe-neighborly/public/uploads/${file.name}`, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }


    const file = req.files.file;
    console.log(file)
  
    
    file.mv(`../fe-neighborly/public/uploads/${file.name}`, err => {
        if(err) {
            console.error(err);
            return res.status(500).send(err);
        }

        res.json({ fileName: file.name, filePath: `../fe-neighborly/public/uploads/${file.name}`})
    })
})
 
app.use(express.json());

//routers
app.use("/posts", postRouter);
app.use("/auth", authRouter);
app.use("/users", userRouter);

app.use("/search", postRouter);


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
