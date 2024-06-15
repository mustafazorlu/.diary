const Blog = require("../models/blogs.js");

const blog_index = (req, res) => {
    Blog.find()
        .sort({ createdAt: -1 })
        .then((result) => {
            res.render("index", { blogs: result });
        })
        .catch((error) => {
            console.log(error);
        });
};

const blog_single = (req, res) => {
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
};

module.exports = {
    blog_index,
    blog_single,
};
