const express = require("express");
const path = require("path");
const connectDb = require("./config/dbConnection");

connectDb();
const app = express();

app.use(express.urlencoded());

app.get("/", (req, res) => {
    console.log("server is responding as expexted _");
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, "\\Pages\\about.html"));
});

app.use("/users", require("./Routes/userRoutes"));

app.listen(3000, () => {
    console.log("connected to server on port 3000");
});
