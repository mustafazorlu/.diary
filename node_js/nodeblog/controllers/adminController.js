const Blog = require("../models/blogs.js");

const admin_index = (req, res) => {
    Blog.find()
        .sort({ createdAt: -1 })
        .then((result) => {
            res.render("admin", { blogs: result });
        })
        .catch((error) => {
            console.log(error);
        });
};

const admin_render = (req, res) => {
    res.render("add", { title: "yeni yazı" });
};

const admin_add = (req, res) => {
    const blog = new Blog(req.body);

    blog.save()
        .then((result) => {
            res.redirect("/admin");
        })
        .catch((err) => {
            console.log(err);
        });
};

const admin_delete = (req, res) => {
    const id = req.params.id;

    Blog.findByIdAndDelete(id)
        .then((result) => {
            res.json({ link: "/admin" });
        })
        .catch((error) => {
            console.log(error);
        });
};

module.exports = {
    admin_index,
    admin_render,
    admin_add,
    admin_delete,
};
