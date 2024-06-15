const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const Blog = require("./models/blogs.js");

const adminRoutes = require("./routes/adminRoutes.js");
const blogRoutes = require("./routes/blogRoutes.js");
const aboutRoutes = require("./routes/aboutRoutes.js");

const app = express();

app.set("view engine", "ejs");

const dbURL =
    "mongodb+srv://mustafi:6WQTCuJBPVMOkN2j@cluster0.yq3y83i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

app.use(morgan("tiny"));
app.use(express.static("public"));
// app.use(express.json())
app.use(express.urlencoded({ extended: true }));

mongoose
    .connect(dbURL)
    .then(
        (result) => {
            console.log("baglantı saglandı");
        },
        //then içerisindeki reject callback bunu yeni öğrendik
        (err) => {
            console.log("hata");
        }
    )
    .catch((error) => {
        console.log(error);
    });

app.get("/all", (req, res) => {
    Blog.find()
        .then((result) => {
            res.send(result);
        })
        .catch((error) => {
            console.log(error);
        });
});

app.get("/", (req, res) => {
    // res.send('<h1>ana sayfa lan</h1>');
    // res.sendFile("./views/index.html", { root: __dirname });
    res.redirect("/blog");
});

app.get("/login", (req, res) => {
    res.render("login");
});
app.use(aboutRoutes);
app.use(blogRoutes);
app.use(adminRoutes);

app.use((req, res) => {
    // res.status(404).sendFile("./views/404.html", { root: __dirname });
    res.render("404");
});

//ejs de render metotlarıyla ilerliyoruz

app.listen(3000);
