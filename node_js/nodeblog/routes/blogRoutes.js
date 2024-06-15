const express = require("express");
const router = express.Router();
const { blog_index, blog_single } = require("../controllers/blogController");

router.get("/blog", blog_index);

router.get("/blogs/:id", blog_single);

module.exports = router;
