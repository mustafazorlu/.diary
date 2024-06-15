const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        short: {
            type: String,
            required: true,
        },
        long: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Blog = mongoose.model("Blogs", blogSchema);
module.exports = Blog;
