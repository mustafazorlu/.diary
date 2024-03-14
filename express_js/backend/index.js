import express from "express";
import usersRouter from "./routes/users.js";
import cors from "cors";
//bodyparser kullanabilirsin.
//
const app = express();
//bodyparser kullanmadan express ile bu işlemi de yapabiliriz
app.use(express.json());
app.use(cors());

app.use("/users", usersRouter);

app.use("*", (req, res) => {
    res.status(404).send("page not found!");
});

const port = 5000;

app.listen(port, () => {
    console.log(`server running on port ${port}`);
});
