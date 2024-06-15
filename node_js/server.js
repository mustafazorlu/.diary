const http = require("http");
const fs = require("fs");
const _ = require("lodash");

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");

    let path = "./views/";
    switch (req.url) {
        case "/":
            path += "home.html";
            res.statusCode = 200;
            break;
        case "/about":
            path += "about.html";
            res.statusCode = 200;
            break;
        case "/about-us":
            res.statusCode = 301;
            res.setHeader("Location", "/about");
            break;
        default:
            path += "404.html";
            res.statusCode = 404;
            break;
    }

    fs.readFile(path, (error, data) => {
        if (error) {
            console.log(error);
            res.end();
        } else {
            res.write(data);
            res.end();
        }
    });

    // res.write("merhaba");
    // res.end();
});

server.listen(3000, "localhost", () => {
    console.log("3000 portu dinleniyor");
});

let nums = [23, 45, 65, 89];

_.each(nums, (val, keys) => {
    console.log(keys, val);
});

let num = _.random(0, 20);
console.log(num);

let greeting = _.once(() => {
    console.log("merhabaaa");
});

greeting();
