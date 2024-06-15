const about_index = (req, res) => {
    // res.send('<h1>ana sayfa lan</h1>');
    // res.sendFile("./views/about.html", { root: __dirname });
    res.render("about");
};

const about_us = (req, res) => {
    res.redirect("/about");
};

module.exports = {
    about_index,
    about_us,
};
