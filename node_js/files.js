let os = require("os");

// console.log(os.homedir());

let fs = require("fs");

fs.readFile("./test.txt", "UTF-8", (error, data) => {
    console.log(data);
});
