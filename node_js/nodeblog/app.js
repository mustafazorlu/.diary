const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const Blog = require("./models/blogs.js");

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

// app.use((req, res, next) => {
//     console.log(req.method);
//     next();
// });

// app.get("/add", (req, res) => {
//     const blog = new Blog({
//         title: "yeni yazı 4",
//         short: "kısa acıklama 4",
//         long: "uzun acıklama falan fistan 4",
//     });

//     blog.save()
//         .then((result) => {
//             res.send(result);
//         })
//         .catch((error) => {
//             console.log(error);
//         });
// });

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

    Blog.find()
        .sort({ createdAt: -1 })
        .then((result) => {
            res.render("index", { blogs: result });
        })
        .catch((error) => {
            console.log(error);
        });
});

// app.use((req, res, next) => {
//     console.log(req.path);
//     next();
// });

app.get("/about", (req, res) => {
    // res.send('<h1>ana sayfa lan</h1>');
    // res.sendFile("./views/about.html", { root: __dirname });
    res.render("about");
});

//redirect
app.get("/about-us", (req, res) => {
    res.redirect("/about");
});

app.get("/login", (req, res) => {
    res.render("login");
});

app.get("/admin", (req, res) => {
    Blog.find()
        .sort({ createdAt: -1 })
        .then((result) => {
            res.render("admin", { blogs: result });
        })
        .catch((error) => {
            console.log(error);
        });
});

app.get("/admin/add", (req, res) => {
    res.render("add", { title: "yeni yazı" });
});

app.post("/admin/add", (req, res) => {
    const blog = new Blog(req.body);

    blog.save()
        .then((result) => {
            res.redirect("/admin");
        })
        .catch((err) => {
            console.log(err);
        });
});

app.get("/blogs/:id", (req, res) => {
    const postId = req.params.id;

    Blog.findById(postId)
        .then((result) => {
            res.render("blog", { blog: result });
        })
        .catch((err) => {
            console.log(err);
        });
    // console.log(postId);
    // res.send(postId);
    // Blog.find(postId).then((result) => {
    // res.send(result);
    // });
});

app.delete("/admin/delete/:id", (req, res) => {
    const id = req.params.id;

    Blog.findByIdAndDelete(id)
        .then((result) => {
            res.json({ link: "/admin" });
        })
        .catch((error) => {
            console.log(error);
        });
});

app.use((req, res) => {
    // res.status(404).sendFile("./views/404.html", { root: __dirname });
    res.render("404");
});

//ejs de render metotlarıyla ilerliyoruz

app.listen(3000);
