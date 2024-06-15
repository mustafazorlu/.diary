const express = require("express");
const Blog = require("../models/blogs.js");
const { about_index, about_us } = require("../controllers/aboutController.js");

const router = express.Router();

router.get("/about", about_index);

//redirect
router.get("/about-us", about_us);

module.exports = router;
